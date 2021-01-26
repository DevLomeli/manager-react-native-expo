import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconFA5 from "react-native-vector-icons/FontAwesome5";

import { connect } from "react-redux";
import { signoutUser } from "../actions";

const Header = ({ RightHeader, signoutUser, user }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftHeaderContainer}>
        <IconFA5 name="tasks" style={styles.logoHeader} />
        <Text style={styles.titleHeader}>Manager App</Text>
      </View>
      {RightHeader ? (
        <View style={styles.rightHeaderContainer}>{RightHeader()}</View>
      ) : null}
      {user && (
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderRadius: 5,
          }}
          onPress={() => signoutUser()}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  const { user } = state.authentication;
  return {
    user,
  };
};
export default connect(mapStateToProps, { signoutUser })(Header);

const styles = StyleSheet.create({
  headerContainer: {
    alignSelf: "stretch",
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftHeaderContainer: {
    flexDirection: "row",
  },
  logoHeader: {
    marginRight: 10,
    fontSize: 20,
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 3,
  },
  rightHeaderContainer: {
    paddingHorizontal: 20,
  },
});
