import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "0.8rem",
    border: "1px solid white",
    padding: "10px 10px",
    borderRadius: "8px",
  },
}));

const Links = () => {
  const classes = useStyles();

  return (
    <>
      <Link
        className={classes.link}
        to={{
          pathname: "https://www.linkedin.com/in/liliia-saleck/",
        }}
        target="_blank"
      >
        Let's Connect
      </Link>
    </>
  );
};

export default Links;
