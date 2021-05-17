import React, { useState } from "react";
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
import MobileRightMenuSlider from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: 250,
    background: "#DC143C",
    height: "100%",
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

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const classes = useStyles();

  const slideList = (slider) => (
    <Box
      className={classes.sliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Typography variant="h5" style={{ color: "white" }}>
        Menu
      </Typography>
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
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "#DC143C" }}>
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {slideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
