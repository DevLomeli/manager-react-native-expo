import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { connect } from "react-redux";
import { loginUser, cleanAuthForm } from "../actions";

import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import SocialMedia from "../components/SocialMedia";
import Container from "../components/Container";

const SigninScreen = ({ navigation, loginUser, cleanAuthForm }) => {
  useEffect(() => {
    navigation.addListener("blur", () => {
      cleanAuthForm();
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header />
        <Text style={styles.h3}>Welcome Back!</Text>
        <Text style={styles.subh3}>Sign in to continue</Text>
        <Spacer />
        <AuthForm textInButton="Login Now" onLogin={loginUser} />
        <Spacer>
          <Text style={styles.p}>Forgot Password ?</Text>
        </Spacer>
        <SocialMedia />
        <Spacer>
          <Text style={{ opacity: 0.5, fontSize: 18, textAlign: "center" }}>
            Don't have an account?{" "}
            <Text
              style={{ fontWeight: "bold" }}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign up
            </Text>
          </Text>
        </Spacer>
      </Container>
    </SafeAreaView>
  );
};

export default connect(null, { loginUser, cleanAuthForm })(SigninScreen);

const styles = StyleSheet.create({
  h3: {
    fontSize: 30,
    fontWeight: "700",
    marginTop: 30,
  },
  subh3: {
    opacity: 0.5,
    fontSize: 16,
    marginTop: 10,
  },
  p: {
    opacity: 0.4,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
