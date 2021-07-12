import React from "react";
import { makeStyles } from "@material-ui/styles";
import footerAdornment from "../assets/footerAdornment.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: theme.palette.common.blue,
    backgroundColor: "#0B72B9",
    width: "5%",
  },
  adornment: {
    width: "15em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "10em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "5em",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img
        alt="Decorative Footer Image"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
