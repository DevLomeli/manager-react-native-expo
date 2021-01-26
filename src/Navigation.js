import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { connect } from "react-redux";

import { navigationRef } from "./services/RootNavigation";

import ResolveScreen from "./screens/ResolveScreen";
import AccessScreen from "./screens/AccessScreen";
import SignupScreen from "./screens/SignupScreen";
import SigninScreen from "./screens/SigninScreen";
import EmployeeList from "./screens/EmployeeListScreen";
import EmployeeCreate from "./screens/EmployeeCreateScreen";
import EmployeeEdit from "./screens/EmployeeEditScreen";

const Stack = createStackNavigator();

const Navigation = ({ authentication }) => {
  const { user, initialized } = authentication;
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName="ResolveAuth"
          screenOptions={{ headerShown: false }}
        >
          {!initialized && (
            <Stack.Screen component={ResolveScreen} name="ResolveAuth" />
          )}
          {!user ? (
            <>
              <Stack.Screen component={AccessScreen} name="Access" />
              <Stack.Screen component={SignupScreen} name="Signup" />
              <Stack.Screen component={SigninScreen} name="Signin" />
            </>
          ) : (
            <>
              <Stack.Screen component={EmployeeList} name="EmployeeList" />
              <Stack.Screen component={EmployeeCreate} name="EmployeeCreate" />
              <Stack.Screen component={EmployeeEdit} name="EmployeeEdit" />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    authentication: state.authentication,
  };
};

export default connect(mapStateToProps, {})(Navigation);
