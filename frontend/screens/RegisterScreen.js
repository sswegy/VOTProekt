import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { COLORS } from "../Constants";
import Card from "../components/Card";

export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Card>
                <TextInput
                    style={{ color: COLORS.onyx }}
                    placeholder="Username"
                />
            </Card>
            <Card>
                <TextInput
                    style={{ color: COLORS.onyx }}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </Card>
            <TouchableOpacity
                style={{ alignItems: "center", alignSelf: "center", width: "75%" }}
                onPress={() => navigation.replace("MainScreen")}
            >
                <Card style={{ width: "100%", alignItems: "center" }}>
                    <Text style={{ color: COLORS.onyx }}>Register</Text>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
                <Text
                    style={{ color: COLORS.onyx, marginHorizontal: 4, marginVertical: 6 }}
                >
                    Already have an account?
                </Text>
            </TouchableOpacity>
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