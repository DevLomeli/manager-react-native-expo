import _ from "lodash";
import React, { useEffect } from "react";

import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import IconFA5 from "react-native-vector-icons/FontAwesome5";

import { connect } from "react-redux";
import { employeesFetch } from "../actions";

import Container from "../components/Container";
import Header from "../components/Header";

const EmployeeList = ({ employeesFetch, navigation, employees }) => {
  useEffect(() => {
    employeesFetch();
  }, []);

  const rightHeader = () => {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("EmployeeCreate")}
      >
        <IconFA5 name="plus" size={18} style={{ color: "#6b45de" }} />
      </TouchableOpacity>
    );
  };

  const onItemPress = (item) => {
    navigation.navigate("EmployeeEdit", { employee: item });
  };

  const renderListItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <ListItem
          style={{ borderBottomColor: "#e1e1e1", borderBottomWidth: 3 }}
        >
          <View
            style={{
              backgroundColor: "#6b45de",
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
            }}
          >
            <Icon name="user-tie" type="font-awesome-5" color="#e1e1e1" />
          </View>
          <ListItem.Content>
            <ListItem.Title style={{ fontSize: 20 }}>
              {item.name}
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header RightHeader={rightHeader} />
        <FlatList
          data={employees}
          keyExtractor={(item) => item.uid}
          renderItem={renderListItem}
        />
      </Container>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return {
    employees,
  };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e1e1e1",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
