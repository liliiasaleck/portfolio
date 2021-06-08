import React from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute",
    opacity: 0.7,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Main />
      <Particles
        canvasClassName={classes.particlesCanva}
        params={{
          particles: {
            number: { value: 50 },
          },
        }}
      />
    </>
  );
};

export default Home;
