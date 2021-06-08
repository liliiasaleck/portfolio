import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Divider,
  List,
  Typography,
  Box,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import { Home, Apps } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import ComputerIcon from "@material-ui/icons/Computer";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MobileRightMenuSlider from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: 250,
    background: "linear-gradient(to left, rgb(244, 92, 67), rgb(234, 46, 68))",
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
    listPath: "/",
  },
  {
    listIcon: <ComputerIcon />,
    listText: "Skills",
    listPath: "/about",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
  },
  {
    listIcon: <MailOutlineIcon />,
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
        Liliia Saleck
      </Typography>
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
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
              <MenuIcon style={{ color: "rgb(234, 46, 68)" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "white" }}>
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
