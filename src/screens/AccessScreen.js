import AccessImg from "../../assets/images/access.png";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";

const AccessScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />

        <Image
          source={AccessImg}
          resizeMode="contain"
          style={styles.imgStyles}
        />

        <Text style={styles.h2}>Hello!</Text>

        <Text style={styles.p}>
          Welcome to my new aplication with firestore to store your tasks
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonLogin]}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSignup]}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.textSignup}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignSelf: "center",
            width: 200,
            marginTop: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginBottom: 10,
              fontSize: 16,
              fontWeight: "bold",
              opacity: 0.5,
            }}
          >
            Or via social media
          </Text>
          <SocialMedia />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  imgStyles: {
    borderRadius: 20,
    height: 400,
    width: 400,
  },
  h2: {
    fontSize: 40,
    fontWeight: "bold",
  },
  p: {
    marginVertical: 20,
    opacity: 0.6,
    textAlign: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
  },
  buttonLogin: {
    backgroundColor: "#6b45de",
  },
  buttonSignup: {
    borderWidth: 2,
    borderColor: "#1b1b1b",
  },
  textLogin: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textSignup: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
