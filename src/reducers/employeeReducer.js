import { employeeTypes } from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case employeeTypes.EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
