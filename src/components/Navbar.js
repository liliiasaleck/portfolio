import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Liliia Saleck
          </Typography>
          <Link to="/about" color="inherit">
            About
          </Link>
          <Link to="/projects" color="inherit">
            Projects
          </Link>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
