import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions
} from "react-native";
import { COLORS } from "../Constants";
import Card from "../components/Card";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>home</Text>
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