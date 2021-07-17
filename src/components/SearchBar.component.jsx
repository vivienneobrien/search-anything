import { alpha, makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => {
  return {
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
      contain: {
        display: "flex",
        justifyCenter: "space-between",
      },
    },
  };
});
const SearchBar = () => {
  const classes = useStyles();
  // search
  const [searchStatus, setSearchStatus] = useState("");

  const handleOnChangeSearchStatus = (event) => {
    setSearchStatus(event.target.value);
    console.log(searchStatus);
  };
  // show data, actual Text, inputsearch

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}></div>
      <InputBase
        placeholder="Search"
        value={searchStatus}
        onChange={handleOnChangeSearchStatus}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default SearchBar;
