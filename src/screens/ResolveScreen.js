import React, { useEffect } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { onAuthStateChanged } from "../actions";

const ResolveScreen = ({ onAuthStateChanged }) => {
  useEffect(() => {
    onAuthStateChanged();
  }, []);
  return <View></View>;
};

export default connect(null, { onAuthStateChanged })(ResolveScreen);
