import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome";

import { connect } from "react-redux";
import { signinWithGoogle } from "../actions";

const SocialMedia = ({ signinWithGoogle }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "center",
        width: 200,
        justifyContent: "space-around",
      }}
    >
      <TouchableOpacity
        style={[styles.roundButton, { backgroundColor: "#3b5998" }]}
      >
        <IconFA name="facebook" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.roundButton, { backgroundColor: "#db4a39" }]}
        onPress={() => {
          signinWithGoogle();
        }}
      >
        <IconFA name="google" size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.roundButton, { backgroundColor: "#0e76a8" }]}
      >
        <IconFA name="linkedin" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { signinWithGoogle })(SocialMedia);

const styles = StyleSheet.create({
  roundButton: {
    padding: 10,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
