import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HelplinePage() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <Stack.Screen
        options={{
          title: "Helpline Directory",
          // headerLeft: ({ href, canGoBack }) => (
          //   <StackBackButton href={href} canGoBack={canGoBack} />
          // ),
        }}
      />
      <ScrollView style={[{ marginTop: insets.top }]}>
        <HelloWave />
        <ThemedText>Hey There!</ThemedText>
      </ScrollView>
    </>
  );
}
