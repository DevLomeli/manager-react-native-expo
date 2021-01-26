import React from "react";
import { View } from "react-native";

const Spacer = ({ children }) => {
  return <View style={{ marginVertical: 20 }}>{children}</View>;
};

export default Spacer;
