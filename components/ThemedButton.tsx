import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { TouchableOpacityProps } from "react-native";
import { useMemo } from "react";
// Custom Components
import { ThemedText } from "./ThemedText";
// Constants/Config
import { Colors } from "@/constants/Colors";


export default function ThemedButton({
  style,
  children,
  startContent,
  endContent,
  ...props
}: TouchableOpacityProps & {
  startContent?: React.ReactNode,
  endContent?: React.ReactNode
}) {
  const colorScheme = useColorScheme();

  const { background, foreground } = useMemo(() => {
    const res = { background: "", foreground: "" };
    res.background =
      colorScheme === "light" ? Colors.surface[600] : Colors.primary[600];
    res.foreground = colorScheme === 'light' ? Colors.primary[600] : Colors.dark.text;
    return res;
  }, [colorScheme]);

  return (
    <TouchableOpacity
      style={[buttonStyles.base, { backgroundColor: background }, style]}
      {...props}
    >
      {startContent}
      <ThemedText style={[{ color: foreground, textAlign:"center" }]} type="subtitle">{children}</ThemedText>
      {endContent}
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    padding: 16,
  },
});
