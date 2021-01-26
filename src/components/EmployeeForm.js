import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Input } from "react-native-elements";

import { connect } from "react-redux";
import { employeeUpdate } from "../actions";

const EmployeeForm = ({
  name,
  phone,
  shift,
  employeeUpdate,
  buttonAction,
  employee,
}) => {
  const onButtonPress = () => {
    buttonAction({
      name,
      phone,
      shift: shift || "Monday",
      uid: employee ? employee.uid : null,
    });
  };

  return (
    <View>
      <Input
        placeholder="Name"
        value={name}
        onChangeText={(value) => {
          employeeUpdate({ prop: "name", value });
        }}
      />
      <Input
        placeholder="Phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(value) => {
          employeeUpdate({ prop: "phone", value });
        }}
      />
      <Text style={styles.pickerTextStyles}>Shift</Text>
      <Picker
        selectedValue={shift}
        onValueChange={(value) => employeeUpdate({ prop: "shift", value })}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
      </Picker>
      <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
        <Text style={styles.textButton}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift,
  };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);

const styles = StyleSheet.create({
  buttonContainer: {
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
  pickerTextStyles: {
    fontSize: 18,
    opacity: 0.5,
    paddingLeft: 10,
  },
});
