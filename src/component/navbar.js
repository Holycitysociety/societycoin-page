import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";
import logo from '../img/logo.png';
import "./navbar.scss"

const useStyles = makeStyles((theme) => ({
  navlinks: { marginLeft: theme.spacing(0), display: "flex" },
  logo: { flexGrow: "0", cursor: "pointer", display: "flex", justifyContent: "space-around", alignItems: "center" },
  link: {
    textDecoration: "none",
    color: "#f5f6f6",
    fontSize: "20px",
    marginLeft: theme.spacing(2),
    "&:hover": { color: "white" }
  }
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className="app-nav">
      <CssBaseline />
      <Toolbar style={{ background: '#0b1127' }} className="tools" >
        <Typography variant="h4" className={classes.logo}>
          <img src={logo} alt="Logo" className="tools-img" />
        </Typography>
        <p className="title">SOCIETYKEY</p>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              Societykey
            </Link>
            <Link to="/" className={classes.link}>
              Society Localist
            </Link>
            <Link to="/" className={classes.link}>
              Society Rides
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar >
  );
}

export default Navbar;
