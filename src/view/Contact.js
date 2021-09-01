import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import Navbar from "../components/Navbar";
import Particles from "react-particles-js";


const useStyles = makeStyles({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "100vw",
    textAlign: "center",
  },
  particlesCanva: {
    position: "absolute",
    opacity: 0.7,
  },
  title:{
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1.5rem",
    textTransform: "none"
  }
});

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box component="div" className={classes.mainContainer}>
        <Typography className={classes.title}>Let's talk!</Typography>
        <br />
        <div>
          <a href="https://github.com/liliiasaleck"><AiFillGithub color="white" fontSize="5em"/></a>
          <a href="https://www.linkedin.com/in/liliia-saleck/"><AiFillLinkedin color="white" fontSize="5em"/></a>
        </div>
      </Box>
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

export default Contact;
