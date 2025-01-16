import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useSafeAreaInsets} from "react-native-safe-area-context";
import MapView from "react-native-maps";
// Custom Components
import ImageCard from "@/components/ui/ImageCard";
import ThemedButton from "@/components/ThemedButton";
import HomeHeader from "@/components/pages/home/HomeHeader";
// Constants/Config
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

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
      <ThemedView style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </ThemedView>

      <ThemedView style={styles.cardContainer}>
        <ImageCard text="Location" icon="location" />
        <ImageCard text="Fake Call" icon="phone" />
        <ImageCard text="Help" icon="siren" />
      </ThemedView>

      <ThemedView>
        <ThemedButton>SOS</ThemedButton>
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
  mapContainer: {
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: 16,
    borderColor: Colors.surface[300] + "33",
    borderWidth: 1,
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
  // Utilities
  flex: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    paddingVertical: 16,
    gap: 8,
  },
});
