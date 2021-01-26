import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { connect } from "react-redux";
import { emailChanged, passwordChanged } from "../actions";

import Spacer from "../components/Spacer";

const AuthForm = ({
  onLogin,
  textInButton,
  emailChanged,
  passwordChanged,
  authentication,
}) => {
  const { email, password, error, loading } = authentication;

  const onEmailChanged = (text) => {
    emailChanged(text);
  };

  const onPassswordChanged = (text) => {
    passwordChanged(text);
  };

  const onButtonPress = () => {
    onLogin({ email, password });
  };

  const renderButton = () => {
    if (loading) {
      return <ActivityIndicator size={50} color="#6b45de" />;
    }
    return (
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.textButton}>{textInButton}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 20, opacity: 0.5 }}>Email</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        onChangeText={onEmailChanged}
        value={email}
      />

      <Spacer />

      <Text style={{ fontSize: 20, opacity: 0.5 }}>Password</Text>

      <TextInput
        secureTextEntry
        style={styles.input}
        autoCapitalize="none"
        onChangeText={onPassswordChanged}
        value={password}
      />
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

      <Spacer>{renderButton()}</Spacer>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(
  AuthForm
);

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    backgroundColor: "#6b45de",
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#a7a7a7",
    paddingVertical: 8,
    fontSize: 18,
    letterSpacing: 2,
  },
  errorMessage: {
    color: "red",
    fontWeight: "700",
    marginTop: 10,
  },
});
