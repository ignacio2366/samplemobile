import useTheme from "@/hooks/useTheme";
import layout from "@/styles/layout";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const { color } = useTheme();
  return (
    <View style={layout.colcenter}>
      <Text style={{ textAlign: "center", backgroundColor: color.lightred }}>
        Login Screen From Screen
      </Text>
      <Button
        onPress={() => router.navigate("/+not-found")}
        title="Not found"
      />
    </View>
  );
}
