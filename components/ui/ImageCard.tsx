import { useMemo } from "react";
import {
  View,
  ColorSchemeName,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { TextStyle } from "react-native";
import { Image } from "expo-image";
// Custom Components
import { ThemedText } from "../ThemedText";
// Constants/Config
import { Colors } from "@/constants/Colors";
import Images from "@/constants/Images";
import gStyles from "@/constants/Styles";

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
  style,
  imageStyle,
  textStyle,
  isDisabled =false,
  onPress
}: {
  icon?: keyof typeof Images;
  text: string;
  style?: ViewStyle,
  imageStyle?: ViewStyle,
  textStyle?: TextStyle,
  isDisabled?: boolean,
  onPress?: ((event: GestureResponderEvent) => void)
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
    <TouchableOpacity
      style={[
        imageCardStyles.base,
        gStyles.border2 as ViewStyle,
        { backgroundColor: background, opacity: isDisabled ? 0.95 : 1 },
        style
      ]}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      touchSoundDisabled={isDisabled}
      onPress={onPress}
    >
      
        <View style={[imageCardStyles.iconContainer, imageStyle]}>{image}</View>
        <ThemedText style={[{ color: foreground, textAlign: 'center', fontSize: 20 }, textStyle]} type="defaultSemiBold">
          {text}
        </ThemedText>

    </TouchableOpacity>
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
  iconContainer: {
    backgroundColor: "white",
    borderRadius: 999,
    padding: 12,
  },
  icon: {
    width: 48,
    height: 48,
  },
});
