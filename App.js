import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import Timer from "./components/Timer";

let store = createStore(reducer);

console.log(store.getState());

export default function App() {
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
