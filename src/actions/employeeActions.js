import { employeeTypes } from "./types";
import { navigate } from "../services/RootNavigation";
import { db, auth } from "../services/firebase";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: employeeTypes.EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const cleanEmployeeForm = () => {
  return {
    type: employeeTypes.CLEAN_EMPLOYEE_FORM,
  };
};

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  const { currentUser } = auth;

  db.ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({
        type: employeeTypes.EMPLOYEE_CREATE,
      });
      navigate("EmployeeList");
    });
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = auth;
  return () => {
    db.ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        navigate("EmployeeList");
      });
  };
};

export const employeeDelete = (uid) => {
  const { currentUser } = auth;
  return () => {
    db.ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        navigate("EmployeeList");
      });
  };
};

export const employeesFetch = () => (dispatch) => {
  const { currentUser } = auth;
  db.ref(`/users/${currentUser.uid}/employees`).on("value", (snapshot) => {
    dispatch({
      type: employeeTypes.EMPLOYEES_FETCH_SUCCESS,
      payload: snapshot.val(),
    });
  });
};
