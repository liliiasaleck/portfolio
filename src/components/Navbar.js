import React from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
} from "@material-ui/icons";
import avatar from "../images/avatar.png";

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: 250,
    background: "#DC143C",
    height: "30rem",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "black",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
  },
];

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.sliderContainer}>
        <Avatar className={classes.avatar} src={avatar} alt="Liliia Saleck" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => (
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>
                {lsItem.listIcon}
              </ListItemIcon>
              <ListItemText
                className={classes.listItem}
                primary={lsItem.listText}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box component="nav">
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton>
              <ArrowBack style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#DC143C" }}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
