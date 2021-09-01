import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Box } from "@material-ui/core";
import Typed from "react-typed";
import Icons from "./Icons";
import Links from "./Links";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#202020	",
    fontSize: "6rem",
    letterSpacing: "0.3rem",
  },
  subtitle: {
    marginBottom: "3rem",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1.6rem",
    letterSpacing: "0.1rem",
  },
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    width: "100vw",
    textAlign: "center",
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        <Typed strings={["Liliia Saleck"]} timeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle}>
        <Typed
          strings={["Junior Frontend Developer", "React", "Typescript"]}
          timeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <Icons />
      <Links />
    </Box>
  );
};

export default Main;
