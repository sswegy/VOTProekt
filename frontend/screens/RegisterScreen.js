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

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://192.168.88.18:5000/auth/register", {
        username,
        password,
        email,
        firstName,
        lastName,
      });

      if (response.status === 201) {
        Alert.alert("Registration successful", "You can now log in");
        navigation.replace("LoginScreen");
      } else {
        Alert.alert(
          "Registration failed",
          response.data.message || "Failed to register"
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      Alert.alert("Registration error", "Failed to register");
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
      <Card>
        <TextInput
          style={{ color: COLORS.onyx }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </Card>
      <Card>
        <TextInput
          style={{ color: COLORS.onyx }}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
      </Card>
      <Card>
        <TextInput
          style={{ color: COLORS.onyx }}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </Card>
      <TouchableOpacity
        style={{ alignItems: "center", alignSelf: "center", width: "75%" }}
        onPress={handleRegister}
      >
        <Card style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ color: COLORS.onyx }}>Register</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
        <Text
          style={{ color: COLORS.onyx, marginHorizontal: 4, marginVertical: 6 }}
        >
          Already have an account? Login
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
