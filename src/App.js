import React from "react";
import App1 from "./App1";
import App2 from "./App2";
import Navbar from "./Navbar";
import { useGlobalContext } from "./context";

const App = () => {
  const { choice } = useGlobalContext();
  if (choice) {
    return (
      <>
        <Navbar />
        <App1 />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <App2 />
      </>
    );
  }
};

export default App;
