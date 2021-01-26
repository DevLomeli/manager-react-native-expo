import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { connect } from "react-redux";
import { signupUser, cleanAuthForm } from "../actions";

import AuthForm from "../components/AuthForm";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import SocialMedia from "../components/SocialMedia";
import Container from "../components/Container";

const SignupScreen = ({ navigation, signupUser, cleanAuthForm }) => {
  useEffect(() => {
    navigation.addListener("blur", () => {
      cleanAuthForm();
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header />
        <Spacer>
          <Text style={styles.h3}>Welcome my friend!</Text>
          <Text style={styles.subh3}>
            Before starting we need some information
          </Text>
        </Spacer>
        <AuthForm textInButton="Sign up" onLogin={signupUser} />
        <Spacer>
          <Text style={styles.p}>Do you want to signup with social media?</Text>
        </Spacer>
        <SocialMedia />
      </Container>
    </SafeAreaView>
  );
};

export default connect(null, { signupUser, cleanAuthForm })(SignupScreen);

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
