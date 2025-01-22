// Native API
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  ViewStyle,
  Pressable,
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from "react-native";
// Custom Components
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Map from "@/components/ui/Map";
// Constants/Config
import { Colors } from "@/constants/Colors";
import gStyles from "@/constants/Styles";

export default function JourneyPage() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Start your Journey",
        }}
      />
      <ThemedView style={styles.container}>
        <JourneySelector />
        <Map
          styles={{
            base: { flex: 1 },
          }}
        />
        <View style={styles.buttonContainer}>
          <Pressable
            style={{
              ...styles.button,
              width: "35%",
              elevation: 5,
              borderRadius: 999,
              backgroundColor: Colors.primary[600],
            }}
          >
            <ThemedText
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Start Safe!
            </ThemedText>
          </Pressable>
        </View>
      </ThemedView>
    </>
  );
}

const JourneySelector = () => {
  return (
    <View style={{ marginTop: 8, gap: 8 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, gap: 8 }}>
          <ThemedInput placeholder="You start from?"></ThemedInput>
          <ThemedInput placeholder="Where are you heading?"></ThemedInput>
        </View>
        <View
          style={{
            padding: 12,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="swap-vertical"
            size={18}
            style={{
              backgroundColor: "black",
              padding: 8,
              borderRadius: 999,
              color: "white",
            }}
          />
        </View>
      </View>
    </View>
  );
};

const ThemedInput: React.FC<
  Omit<TextInputProps, "style"> & {
    styles?: {
      container?: ViewStyle;
      base?: TextStyle;
    };
    label?: React.ReactNode;
  }
> = ({ styles, children, ...props }) => {
  return (
    <ThemedView style={lStyles.base}>
      <TextInput {...props} style={[lStyles.input, styles?.base]}>
        {children}
      </TextInput>
    </ThemedView>
  );
};

const lStyles = StyleSheet.create({
  base: {
    position: "relative",
  },
  input: {
    paddingLeft: 12,
    borderRadius: 12,
    // marginTop: 12,
    ...(gStyles.border2 as TextStyle),
  },
  label: {
    position: "absolute",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    gap: 16,
  },
  buttonContainer: {
    height: "10%",
    position: "relative",
  },
  button: {
    position: "absolute",
    aspectRatio: "1/1",
    top: -16,
    left: "50%",
    bottom: "auto",
    transform: [{ translateY: "-50%" }, { translateX: "-50%" }],
    justifyContent: "center",
    alignItems: "center",
  },
});
