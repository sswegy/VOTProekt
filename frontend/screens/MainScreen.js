import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../Constants";
import Card from "../components/Card";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            width: "80%",
            position: "absolute",
            bottom: 20,
            left: windowWidth / 10,
            right: windowWidth / 10,
            backgroundColor: COLORS.emerald,
            borderRadius: 10,
            borderColor: COLORS.emerald,
            borderWidth: 0.25,
            elevation: 11,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: COLORS.black,
            shadowOpacity: 0.45,
            shadowRadius: 9.11,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: () => <Image />,
            tabBarActiveBackgroundColor: COLORS.light_green,
            tabBarItemStyle: { borderRadius: 9 },
            tabBarActiveTintColor: COLORS.onyx,
            tabBarInactiveTintColor: COLORS.slate_gray,
            headerRight: () => (
              <Button
                onPress={() => navigation.push("NewPostScreen")}
                title="New Post"
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
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarIcon: () => <Image />,
            tabBarActiveBackgroundColor: COLORS.light_green,
            tabBarItemStyle: { borderRadius: 9 },
            tabBarActiveTintColor: COLORS.onyx,
            tabBarInactiveTintColor: COLORS.slate_gray,
            headerRight: () => (
              <Button
                onPress={() => navigation.replace("LoginScreen")}
                title="Log Out"
                color={COLORS.red}
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
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mantis,
  },
});
