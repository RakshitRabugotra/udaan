import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

const personName = "Rakshit";
const address = "Malka Ganj, Delhi";

export default function HomeHeader() {
  return (
    <ThemedView style={headerStyles.base}>
      <Ionicons
        name="person"
        size={32}
        color="white"
        style={{
          width: 48,
          aspectRatio: "1",
          backgroundColor: "black",
          padding: 8,
          borderRadius: 999,
        }}
      />
      <View style={headerStyles.userInfo}>
        <ThemedText type="subtitle">Hello, {personName}</ThemedText>
        <ThemedText type="defaultSemiBold" style={{ lineHeight: 16 }}>
          {address}
        </ThemedText>
      </View>
      <Pressable onPress={() => {}}>
        <Ionicons
          name="settings-outline"
          style={headerStyles.gearIcon}
          size={28}
          color="#858585aa"
        />
      </Pressable>
    </ThemedView>
  );
}

const headerStyles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 16,
  },
  userInfo: {
    gap: 8,
    flex: 1,
  },
  gearIcon: {
    borderRadius: 12,
    borderColor: "#85858555",
    borderWidth: 2,
    padding: 8,
  },
});
