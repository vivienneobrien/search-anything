import { alpha, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import user_image from "../assets/user_image.png";
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Avatar,
  Typography,
} from "@material-ui/core";
import SearchBar from "./SearchBar.component";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    // moves content under app bar out from drawer
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    userName: {
      flexGrow: 1, // NOT GOING TO THE RIGHT??
    },
    avatar: {
      marginLeft: theme.spacing(2), // two times the base spacing
      marginRight: theme.spacing(2),
    },
    toolbarMargin: {
      ...theme.mixins.toolbar, // contains height of app bar and creates a cussion that pushes hidden content out so it can be seen on the screen
      marginBottom: "2em", // to offset height of logo
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
      fontFamily: "Roboto",
      fontWeight: 450,
    },
    toolbarHeight: {
      height: "5.4em",
      background: "#0B72B9",
      color: "white",
    },
  };
});

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/images" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/videos" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  return (
    <AppBar className={classes.appBar} elevation={0}>
      <Toolbar disableGutters={true} className={classes.toolbarHeight}>
        <SearchBar />
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabContainer}
          indicatorColor="primary"
        >
          <Tab className={classes.tab} component={Link} to="/" label="Quotes" />
          <Tab
            className={classes.tab}
            component={Link}
            to="/images"
            label="Images"
          />
          <Tab
            className={classes.tab}
            component={Link}
            to="/videos"
            label="Videos"
          />
        </Tabs>

        <Typography className={classes.userName}></Typography>
        <Typography> Vivienne O'Brien 👋 </Typography>
        <Avatar src={user_image} alt="User Image" className={classes.avatar} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
