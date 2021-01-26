import { authTypes } from "../actions/types";

const INITIALIZE_STATE = {
  email: "",
  password: "",
  loading: false,
  error: "",
  user: null,
  initialized: false,
};

const authReducer = (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case authTypes.EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case authTypes.PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case authTypes.CLEAN_AUTH_FORM:
      return { ...state, email: "", password: "", error: "" };
    case authTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIALIZE_STATE,
        user: action.payload,
        initialized: true,
      };
    case authTypes.LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        password: "",
        loading: false,
        initialized: true,
      };
    case authTypes.LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case authTypes.SIGNOUT_USER:
      return INITIALIZE_STATE;
    default:
      return state;
  }
};

export default authReducer;
