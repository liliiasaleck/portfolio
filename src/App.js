import React from "react";
import Home from "./view/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import About from "./view/About";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </>
  );
};

export default App;
