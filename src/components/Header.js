import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Avatar, Box } from "@material-ui/core";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#DC143C",
  },
  subtitle: {
    marginBottom: "3rem",
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

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h2">
        <Typed strings={["Liliia Saleck"]} timeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Frontend Developer", "React", "MERN"]}
          timeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
