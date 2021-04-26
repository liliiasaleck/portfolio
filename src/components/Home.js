import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    padding: "15%",
    backgroundColor: "pink",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid}>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>Liliia Saleck</Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>Frontend developer</Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>Skills giphy</Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>Projects</Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper className={classes.paper}>Contact</Paper>
      </Grid>
    </Grid>
  );
}

export default Home;
