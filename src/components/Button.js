import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, bgColorButton, pressHandler }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: bgColorButton }]}
      onPress={pressHandler}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: "center",
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
