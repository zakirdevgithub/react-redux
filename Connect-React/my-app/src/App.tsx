import React from 'react';
import {Provider} from "react-redux";
import store from "./components/store/index";
import RetrieveData from "./components/RetrieveData";
import UpdateData from "./components/UpdateData";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Hello World!</h1>
        <RetrieveData/>
        <UpdateData/>
      </Provider>
    </>
  );
}

export default App;
