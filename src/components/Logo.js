import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  logo: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1.2rem",
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <>
      <Link className={classes.logo} to="/">
        Liliia Saleck
      </Link>
    </>
  );
};

export default Logo;
