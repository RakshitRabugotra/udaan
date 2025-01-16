import { useMemo } from "react";
import { View, Pressable, ColorSchemeName, StyleSheet, useColorScheme } from "react-native";
import { Image } from "expo-image";
// Custom Components
import { ThemedText } from "../ThemedText";
// Constants/Config
import { Colors } from "@/constants/Colors";
import Images from "@/constants/Images";

const getColorScheme = (colorScheme: ColorSchemeName = "light") => {
  const res = { background: "", foreground: "" };
  res.background =
    colorScheme === "light" ? Colors.light.background : Colors.surface[400];
  res.foreground =
    colorScheme === "light" ? Colors.light.text : Colors.dark.text;
  return res;
};

export default function ImageCard({
  icon,
  text,
}: {
  icon?: "location" | "phone";
  text: string;
}) {
  const colorScheme = useColorScheme();

  const image = useMemo(
    () =>
      icon && (
        <Image
          style={imageCardStyles.icon}
          source={Images[icon]}
          contentFit="cover"
          transition={1000}
        />
      ),
    [icon]
  );

  const { background, foreground } = useMemo(
    () => getColorScheme(colorScheme),
    [colorScheme]
  );

  return (
    <Pressable
      style={[
        imageCardStyles.base,
        imageCardStyles.boxWithShadow,
        { backgroundColor: background },
      ]}
    >
      <View style={imageCardStyles.iconContainer}>
        {image}
      </View>
      <ThemedText style={[{ color: foreground }]} type="subtitle">
        {text}
      </ThemedText>
    </Pressable>
  );
}

export const imageCardStyles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "3/4",
    borderRadius: 16,
    gap: 12,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 999,
    padding: 12,
  },
  icon: {
    width: 48,
    height: 48
  },
});
