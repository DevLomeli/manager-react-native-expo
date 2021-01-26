import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { connect } from "react-redux";
import { employeeCreate, cleanEmployeeForm } from "../actions";

import Container from "../components/Container";
import EmployeeForm from "../components/EmployeeForm";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
const EmployeeCreateScreen = (props) => {
  useEffect(() => {
    props.navigation.addListener("blur", () => {
      props.cleanEmployeeForm();
    });
  }, [props.navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header />
        <Spacer>
          <EmployeeForm
            {...props.route.params}
            buttonAction={props.employeeCreate}
          />
        </Spacer>
      </Container>
    </SafeAreaView>
  );
};

export default connect(null, { employeeCreate, cleanEmployeeForm })(
  EmployeeCreateScreen
);

const styles = StyleSheet.create({});
