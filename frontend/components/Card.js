import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../Constants";

export default function Card(props) {
  return (
    <View style={[styles.card, props.style]}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "75%",
    backgroundColor: COLORS.emerald,
    borderRadius: 10,
    borderColor: COLORS.emerald,
    borderWidth: 0.25,
    elevation: 11,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: COLORS.black,
    shadowOpacity: 0.4,
    shadowRadius: 9.11,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});