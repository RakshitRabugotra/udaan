import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsPage() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Stack.Screen
        options={{
          title: "Settings",
          // headerLeft: ({ href, canGoBack }) => (
          //   <StackBackButton href={href} canGoBack={canGoBack} />
          // ),
        }}
      />
      <ScrollView style={[{ marginTop: insets.top }]}></ScrollView>;
    </>
  );
}

const StackBackButton = ({
  href,
  canGoBack,
}: {
  href?: string;
  canGoBack?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 8,
        borderRadius: 12,
        borderColor: Colors.surface[300] + "33",
        borderWidth: 1,
      }}
      onPress={() => canGoBack && router.back()}
    >
      <Ionicons name="arrow-back" size={28} color="black" />
    </TouchableOpacity>
  );
};
