import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MainScreen from "./screens/MainScreen";
import NewPostScreen from "./screens/NewPostScreen";
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewPostScreen"
          component={NewPostScreen}
          options={({ navigation }) => ({
            title: "New Post",
            headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                title="Cancel"
                color={COLORS.red}
              />
            ),
            headerRight: () => (
              <Button
                onPress={() => {}}
                title="Submit"
                color={COLORS.wenge}
              />
            ),
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: COLORS.emerald,
              elevation: 11,
              shadowColor: COLORS.black,
              shadowOpacity: 0.4,
              shadowRadius: 9.11,
            },
            headerTintColor: COLORS.onyx,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
