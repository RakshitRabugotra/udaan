import { useMemo } from "react";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "../ThemedText";
import { Pressable } from "react-native";
import { View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function ImageCard({
  icon,
  text,
}: {
  icon?: string;
  text: string;
}) {

  const cardBackground = useThemeColor({ light: '#1D3D47', dark: '#A1CEDC' }, 'background');

  const testImage = useMemo(
    () => <Ionicons name="call" size={32} color="green" />,
    []
  );

  return (
    <Pressable style={[imageCardStyles.base, { backgroundColor:cardBackground  }]}>
      <View style={[{ padding: 8}]}>{testImage}</View>
      <View style={imageCardStyles.icon}>
        <ThemedText style={[imageCardStyles.text, { color: cardBackground }]}>{text}</ThemedText>
      </View>
    </Pressable>
  );
}

export const imageCardStyles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '6/7',
    borderRadius: 16,
    gap: 12
  },
  icon: {},
  text: {
    fontWeight: 600,
    fontSize: 22
  },
});
