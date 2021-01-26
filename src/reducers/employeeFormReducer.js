import { employeeTypes } from "../actions/types";
const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: "",
};
const employeeFormReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case employeeTypes.EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'fernando' }
      return { ...state, [action.payload.prop]: action.payload.value };
    case employeeTypes.EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case employeeTypes.CLEAN_EMPLOYEE_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default employeeFormReducers;
