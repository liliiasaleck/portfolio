import React from "react";
import Home from "./view/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import { Route } from "react-router-dom";
import Contact from "./view/Contact";
import Portfolio from "./view/Portfolio";
import Skills from "./view/Skills";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/skills" component={Skills} />

    </>
  );
};

export default App;
