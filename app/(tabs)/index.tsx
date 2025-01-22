import { useEffect, useState } from "react";
// Native API
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// Custom Components
import { ThemedView } from "@/components/ThemedView";
import HomeHeader from "@/components/pages/home/HomeHeader";
import ImageCard from "@/components/ui/ImageCard";
import Map from "@/components/ui/Map";
import ThemedButton from "@/components/ThemedButton";
// Custom Utilities
import { fetchLocation, LocationObject, shareLocation } from "@/util/location";
import { sendSOS, UserData } from "@/util/sos";


export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [userLocation, setUserLocation] = useState<LocationObject | null>(null);

  const verifyAndShareLocation = async () => {
    // const location = await fetchLocation({
    //   onError(error) {
    //     console.log("Error while fetching the location: ", error);
    //   },
    // });
    // if (!location) {
    //   console.log("Couldn't fetch location");
    //   return;
    // }
    // Else, the location is fetched, then share the location
    shareLocation({
      location: userLocation,
      onSuccess() {
        console.log("Location share success");
      },
      onError() {
        console.log("Error while sharing...");
      },
    });
  };

  useEffect(() => {
    const updateLocation = async () => {
      const location = await fetchLocation({
        onSuccess(result) {
          // Update the user-location
          setUserLocation((prev) => result as LocationObject);
        },
        onError(error) {
          console.log("Error while fetching the location: ", error);
        },
      });
      if (!location) {
        console.log("Couldn't fetch location");
        return;
      }
      console.log("Location updated at: ", new Date().toTimeString());
      // Update the user-location
      setUserLocation((prev) => location);
    };

    updateLocation();
  }, []);

  if (!userLocation) {
    return (
      <ThemedView>
        {/* <ActivityIndicator>
          <ThemedText type="title">Locating...</ThemedText>
        </ActivityIndicator> */}
      </ThemedView>
    );
  }

  return (
    // <ParallaxScrollView
    //   headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
    //   headerImage={
    //     <Image
    //       source={require('@/assets/images/partial-react-logo.png')}
    //       style={styles.reactLogo}
    //     />
    //   }>

    <ThemedView style={[styles.baseContainer, { marginTop: insets.top }]}>
      <HomeHeader />
      <ThemedView style={styles.heroContainer}>
        <Map />
        <View style={styles.sosContainer}>
          <ThemedButton
            style={{
              backgroundColor: "#dc3545",
              borderRadius: 999,
              flex: 0,
              width: "33%",
              elevation: 6,
              aspectRatio: "1/1",
            }}
            textStyle={{
              color: "#fff",
            }}
            activeOpacity={0.97}
            onPress={() =>
              sendSOS({
                userData: JSON.stringify({
                  name: "Rakshit Rabugotra",
                  email: "rakshit.rabugotra360@gmail.com",
                  emergency: ["+91-8080"],
                } as UserData),
                location: userLocation,
              })
            }
          >
            {userLocation ? "SOS" : "Locating..."}
          </ThemedButton>
        </View>
      </ThemedView>

      <ThemedView style={styles.cardContainer}>
        <ImageCard
          text={userLocation ? "Share location" : "Locating..."}
          icon="location"
          isDisabled={!userLocation}
          onPress={() => verifyAndShareLocation()}
        />
        <ImageCard
          text="Start Journey"
          icon="route"
          onPress={() => router.push("/journey")}
        />
        <ImageCard
          text="Help Directory"
          icon="siren"
          onPress={() => router.push("/helpline")}
        />
      </ThemedView>

      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */}
    </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    paddingTop: 0,
    padding: 12,
  },
  heroContainer: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: "20%",
    position: "relative",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  sosContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 16,
    position: "absolute",
    inset: 0,
    top: "auto",
    transform: [{ translateY: "50%" }],
    paddingVertical: 8,
    zIndex: 10,
  },
  cardContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
