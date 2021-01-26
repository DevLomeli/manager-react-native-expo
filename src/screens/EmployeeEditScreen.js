import _ from "lodash";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Communications from "react-native-communications";

import { connect } from "react-redux";
import {
  employeeUpdate,
  cleanEmployeeForm,
  employeeSave,
  employeeDelete,
} from "../actions";

import Container from "../components/Container";
import EmployeeForm from "../components/EmployeeForm";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import Confirm from "../components/Confirm";

const EmployeeCreateScreen = ({
  navigation,
  route,
  employeeDelete,
  employeeUpdate,
  cleanEmployeeForm,
  employeeSave,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    _.each(route.params.employee, (value, prop) => {
      employeeUpdate({ prop, value });
    });
    navigation.addListener("blur", () => {
      cleanEmployeeForm();
    });
  }, [navigation]);

  const onTextPress = () => {
    const { phone, shift } = route.params.employee;
    Communications.text(phone, `Your upcoming shift is on ${shift}.`);
  };

  const onConfirm = () => {
    const { uid } = route.params.employee;
    employeeDelete(uid);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header />
        <Text style={styles.title}>Edit employee's data</Text>
        <Spacer>
          <EmployeeForm
            buttonAction={employeeSave}
            employee={route.params.employee}
          />
        </Spacer>
        <TouchableOpacity style={styles.buttonContainer} onPress={onTextPress}>
          <Text style={styles.textButton}>Text Schedule</Text>
        </TouchableOpacity>
        <Button
          title="Delete"
          bgColorButton="red"
          pressHandler={() => setModalVisible((modalVisible) => !modalVisible)}
        />
        <Confirm
          modalVisible={modalVisible}
          declineHandler={() =>
            setModalVisible((modalVisible) => !modalVisible)
          }
          confirmHandler={onConfirm}
        />
      </Container>
    </SafeAreaView>
  );
};

export default connect(null, {
  employeeSave,
  employeeUpdate,
  cleanEmployeeForm,
  employeeDelete,
})(EmployeeCreateScreen);

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
    opacity: 0.5,
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: "#1b1b1b",
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
