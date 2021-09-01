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
      <Grid container justify="center" >
        <Grid item xs={12} sm={8} md={6}>
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
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Id dolore reprehenderit exercitation commodo anim do amet ex dolor tempor quis pariatur amet. Lorem mollit exercitation ad excepteur consectetur Lorem esse. Quis consequat enim ullamco ad occaecat aliqua id sunt aliqua ex Lorem magna. In fugiat esse aute dolore deserunt aute veniam.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>         
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
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
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Id dolore reprehenderit exercitation commodo anim do amet ex dolor tempor quis pariatur amet. Lorem mollit exercitation ad excepteur consectetur Lorem esse. Quis consequat enim ullamco ad occaecat aliqua id sunt aliqua ex Lorem magna. In fugiat esse aute dolore deserunt aute veniam.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
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
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Id dolore reprehenderit exercitation commodo anim do amet ex dolor tempor quis pariatur amet. Lorem mollit exercitation ad excepteur consectetur Lorem esse. Quis consequat enim ullamco ad occaecat aliqua id sunt aliqua ex Lorem magna. In fugiat esse aute dolore deserunt aute veniam.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
          </Card>   
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                // image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Id dolore reprehenderit exercitation commodo anim do amet ex dolor tempor quis pariatur amet. Lorem mollit exercitation ad excepteur consectetur Lorem esse. Quis consequat enim ullamco ad occaecat aliqua id sunt aliqua ex Lorem magna. In fugiat esse aute dolore deserunt aute veniam.
                </Typography>
              </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
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
