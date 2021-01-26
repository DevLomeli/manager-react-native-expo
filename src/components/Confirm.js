import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";

import Button from "../components/Button";

const Confirm = ({ modalVisible, confirmHandler, declineHandler }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.titleStyles}>
            Do you want to delete this employee?
          </Text>
          <Button
            title="Yes"
            bgColorButton="#4c85b7"
            pressHandler={confirmHandler}
          />
          <Button
            title="No"
            bgColorButton="#c93939"
            pressHandler={declineHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.3)",
    paddingHorizontal: 20,
  },
  modalView: {
    backgroundColor: "#e1e1e1",
    padding: 20,
    borderRadius: 10,
    elevation: 1,
  },
  titleStyles: {
    textAlign: "center",
    fontSize: 24,
  },
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
});
