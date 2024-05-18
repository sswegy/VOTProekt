import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import { COLORS } from "./Constants";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: "Home",
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: COLORS.emerald,
              elevation: 11,
              shadowColor: COLORS.black,
              shadowOpacity: 0.4,
              shadowRadius: 9.11,
            },
            headerTintColor: COLORS.onyx,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}