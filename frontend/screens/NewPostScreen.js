import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard,
} from "react-native";
import { COLORS } from "../Constants";
import Card from "../components/Card";

export default function NewPostScreen() {
  return (
    <View style={styles.container}>
      <Card style={{ maxHeight: "20%" }}>
        <TextInput
          style={{ color: COLORS.onyx }}
          multiline={true}
          placeholder="Title"
          blurOnSubmit={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
      </Card>
      <Card style={{ width: "90%", height: "70%", maxHeight: "80%" }}>
        <TextInput
          style={{ color: COLORS.onyx }}
          multiline={true}
          placeholder="Body"
          blurOnSubmit={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mantis,
    alignItems: "center",
    justifyContent: "top",
  },
});
