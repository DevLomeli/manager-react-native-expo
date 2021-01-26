import React, { useEffect } from "react";
import { LogBox } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import reducers from "./src/reducers";

import Navigation from "./src/Navigation";

const store = createStore(reducers, {}, applyMiddleware(Thunk));

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
