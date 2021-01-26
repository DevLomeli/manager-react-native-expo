import { auth, googleProvider } from "../services/firebase";
import { authTypes } from "./types";
import { navigate } from "../services/RootNavigation";

export const emailChanged = (text) => {
  return {
    type: authTypes.EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: authTypes.PASSWORD_CHANGED,
    payload: text,
  };
};

export const cleanAuthForm = () => {
  return {
    type: authTypes.CLEAN_AUTH_FORM,
  };
};

export const onAuthStateChanged = () => (dispatch) => {
  auth.onAuthStateChanged((user) => {
    dispatch({
      type: authTypes.LOGIN_USER_SUCCESS,
      payload: user,
    });
    !user ? navigate("Access") : navigate("EmployeeList");
  });
};

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: authTypes.LOGIN_USER });

  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => loginUserSuccess(dispatch, user))
    .catch((error) => loginUserFail(dispatch, error));
};

export const signupUser = ({ email, password }) => (dispatch) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => loginUserSuccess(dispatch, user))
    .catch((error) => {
      loginUserFail(dispatch, error);
    });
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: authTypes.LOGIN_USER_FAIL, payload: error.message });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: authTypes.LOGIN_USER_SUCCESS,
    payload: user,
  });
  navigate("EmployeeList");
};

export const signoutUser = () => (dispatch) => {
  auth.signOut();
  dispatch({
    type: authTypes.SIGNOUT_USER,
  });
};

export const signinWithGoogle = () => (dispatch) => {
  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };

  const onSignIn = (googleUser) => {
    console.log("Google Auth Response", googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token
        );

        // Sign in with credential from the Google user.
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      } else {
        console.log("User already signed-in Firebase.");
      }
    });
  };
};
