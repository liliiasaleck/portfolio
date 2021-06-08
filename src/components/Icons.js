import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiMaterialUi } from "react-icons/si";
import Grid from "@material-ui/core/Grid";
import { BsFillBootstrapFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  container: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1.5rem",
    margin: "2rem",
  },
}));

const Icons = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container}>
        <FaCss3Alt />
        <FaHtml5 />
        <IoLogoJavascript />
        <SiTypescript />
        <FaReact />
        <BsFillBootstrapFill />
        <SiMaterialUi />
      </Grid>
    </>
  );
};

export default Icons;
