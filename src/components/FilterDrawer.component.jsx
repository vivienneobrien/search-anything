import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import Header from "./Header.component";
import { Button, Drawer, TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import logo from "../assets/logo.png";

const drawerWidth = 240;

const segments = [
  { title: "Tradiotionalists", recordCount: 2.3 },
  { title: "Nurturers", recordCount: 10.1 },
  { title: "Indulgers", recordCount: 3.8 },
  { title: "Egalitarians", recordCount: 6.1 },
  { title: "Dutifuls", recordCount: 4.1 },
  { title: "Creatives", recordCount: 5.5 },
];

const market = [
  { title: "United States", recordCount: 2.3 },
  { title: "United Kingdom", recordCount: 10.1 },
  { title: "Global", recordCount: 3.8 },
  { title: "China", recordCount: 6.1 },
  { title: "Brazil", recordCount: 4.1 },
  { title: "Spain", recordCount: 5.5 },
];

const age = [
  { title: "18-24", recordCount: 2.3 },
  { title: "35-49", recordCount: 10.1 },
  { title: "50-59", recordCount: 3.8 },
  { title: "60+", recordCount: 6.1 },
];

const gender = [
  { title: "Woman", recordCount: 2.3 },
  { title: "Self-describe as (specify)", recordCount: 10.1 },
  { title: "Prefer not to answer", recordCount: 3.8 },
  { title: "Man", recordCount: 6.1 },
];

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
      paddingTop: theme.spacing(20), // top
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    title: {
      padding: theme.spacing(2),
    },
    toolBar: theme.mixins.toolbar, // collection of styles used by one of material uis components. height same as app bar
    logo: {
      height: "7em",
    },
    logoContainer: {
      padding: 0,
      "&hover": {
        backgroundColor: "transparent",
      },
      root: {
        margin: "30px 16px",
      },
    },
  };
});
const FilterDrawer = ({ children }) => {
  const classes = useStyles();

  const segmentDefaultProps = {
    options: segments,
    getOptionLabel: (option) => option.title,
  };

  const marketDefaultProps = {
    options: market,
    getOptionLabel: (option) => option.title,
  };

  const ageDefaultProps = {
    options: age,
    getOptionLabel: (option) => option.title,
  };

  const genderDefaultProps = {
    options: gender,
    getOptionLabel: (option) => option.title,
  };
  const [segmentFilter, setSegmentFilter] = useState("");
  const [marketFilter, setMarketFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  return (
    <div className={classes.root}>
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Button disableRipple className={classes.logoContainer}>
            <img src={logo} alt="Inspire Logo" className={classes.logo} />
          </Button>

          {/* Segment */}
          <div style={{ width: 170 }} className="root">
            <Autocomplete
              {...segmentDefaultProps}
              id="Segment"
              debug
              renderInput={(params) => (
                <TextField {...params} label="Segment" margin="normal" />
              )}
            />
            {/* Market */}
            <Autocomplete
              {...marketDefaultProps}
              id="Market"
              debug
              renderInput={(params) => (
                <TextField {...params} label="Market" margin="normal" />
              )}
            />
            {/* Age */}
            <Autocomplete
              {...ageDefaultProps}
              id="Age"
              debug
              renderInput={(params) => (
                <TextField {...params} label="Age" margin="normal" />
              )}
            />
            {/* Gender */}
            <Autocomplete
              {...genderDefaultProps}
              id="Gender"
              debug
              renderInput={(params) => (
                <TextField {...params} label="Gender" margin="normal" />
              )}
            />
          </div>
        </div>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolBar}></div>
        {children}
      </div>
    </div>
  );
};

export default FilterDrawer;
