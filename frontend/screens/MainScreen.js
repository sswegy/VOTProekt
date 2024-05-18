import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions
} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from "../Constants";
import Card from "../components/Card";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>ebired</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.mantis,
        alignItems: "center",
        justifyContent: "center",
    },
});