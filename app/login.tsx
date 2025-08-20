import LoginScreen from "@/screens/LoginScreen";
import { useEffect } from "react";
import { View } from "react-native";

export default function Login() {
  useEffect(() => {
    console.log("LoginScreen mounted");
  }, []);
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <LoginScreen />
    </View>
  );
}
