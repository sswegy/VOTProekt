import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { COLORS } from "../Constants";
import Card from "../components/Card";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.88.18:5000/auth/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        const { token } = response.data;
        console.log("Login successful", token);
        navigation.replace("MainScreen");
      } else {
        Alert.alert("Login failed", "Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login error", "Failed to login");
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <TextInput
          style={{ color: COLORS.onyx }}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
      </Card>
      <Card>
        <TextInput
          style={{ color: COLORS.onyx }}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </Card>
      <TouchableOpacity
        style={{ alignItems: "center", alignSelf: "center", width: "75%" }}
        onPress={handleLogin}
      >
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ color: COLORS.onyx }}>Login</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
        <Text
          style={{ color: COLORS.onyx, marginHorizontal: 4, marginVertical: 6 }}
        >
          Don't have an account?
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
