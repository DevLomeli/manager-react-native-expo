import { combineReducers } from "redux";
import authReducer from "./authReducer";
import employeeFormReducer from "./employeeFormReducer";
import employeeReducer from "./employeeReducer";
export default combineReducers({
  authentication: authReducer,
  employeeForm: employeeFormReducer,
  employees: employeeReducer,
});
