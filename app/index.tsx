import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const App = () => {
  const route = useRouter();
  useEffect(() => {
    console.log("App mounted");
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Main Screen</Text>
      <TouchableOpacity
        onPress={() => route.push("/login")}
        style={{ padding: 10, backgroundColor: "#D82A34", borderRadius: 5 }}
      />
      <Text style={{ color: "#FFFFFF" }}>Go to Login</Text>
    </View>
  );
};

export default App;
