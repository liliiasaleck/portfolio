import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";

import project1 from "../images/jobshop.png";
import project2 from "../images/portfolio.png";
import project3 from "../images/skillshop.png";



const useStyles = makeStyles({
  mainContainer:{
    height: "100%",
  },
  cardContainer:{
    maxWidth:"20rem",
    margin: "5rem auto"
  }
})

const Portfolio = () => {
  const classes = useStyles()
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container  justify="center"  direction="row">
        <Grid item xs={4}>
          <Card className={classes.cardContainer} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Job search marketplace | React.js | Nest.js | Redux
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/liliiasaleck/job_shop_frontend">
                  Github 
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>         
        </Grid>
        <Grid item xs={4} >
          <Card className={classes.cardContainer} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                Portfolio site | React.js | Material UI
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/liliiasaleck/portfolio">
                  Github
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4} >
          <Card className={classes.cardContainer} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                SkillShop marketplace | React.js | Firebase
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="https://github.com/liliiasaleck/jfddr2-unasdziala-app">
                  Github 
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>   
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
