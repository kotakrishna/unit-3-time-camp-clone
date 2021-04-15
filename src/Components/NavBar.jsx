import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../Redux/action";

import "../App.css";
const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      fontStyle: "Roboto, sans-serif",
    },
  },
  appBar: {
    backgroundColor: "white",
    borderBottom: `1px solid white`,
    height: "85px",
    // fontSize: "1000",
  },
  toolbar: {
    flexWrap: "wrap",
    marginTop: "10px",
  },
  toolbarTitle: {
    flexGrow: 0.9,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: "15px",
    color: "black",
    "&:hover": {
      color: "gold",
    },
  },
  // marginTop: "10px"
  button: {
    margin: theme.spacing(1, 1.5),
    backgroundColor: "#00bf71",
    "&:hover": {
      backgroundColor: "#039259",
    },
    color: "white",
    fontWeight: "600",
    fontSize: "12px",
    padding: "10px",
    borderRadius: "50px",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  // cardHeader: {
  //   backgroundColor:
  //     theme.palette.type === "light"
  //       ? theme.palette.grey[200]
  //       : theme.palette.grey[700],
  // },
  // cardPricing: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "baseline",
  //   marginBottom: theme.spacing(2),
  // },
  // footer: {
  //   borderTop: `1px solid ${theme.palette.divider}`,
  //   marginTop: theme.spacing(8),
  //   paddingTop: theme.spacing(3),
  //   paddingBottom: theme.spacing(3),
  //   [theme.breakpoints.up("sm")]: {
  //     paddingTop: theme.spacing(6),
  //     paddingBottom: theme.spacing(6),
  //   },
  // },
}));

export default function NavBar() {
  const isAuth = useSelector((state) => state.isAuth);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userLogout());
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        // backgroundColor="white"
        elevation={0}
        className={classes.appBar}
        // style={{ paddingLeft: "0px", paddingRight: "5px" }}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <RouterLink to="/">
              <img src="/colorLogo.svg" alt="" />
            </RouterLink>
          </Typography>
          <nav>
            <RouterLink style={{ color: "black", textDecoration: "none" }}>
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Features
              </Link>
            </RouterLink>
            <RouterLink style={{ color: "black", textDecoration: "none" }}>
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Pricing
              </Link>
            </RouterLink>
            <RouterLink style={{ color: "black", textDecoration: "none" }}>
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Integration
              </Link>
            </RouterLink>
            <RouterLink style={{ color: "black", textDecoration: "none" }}>
              <Link
                // variant="button"
                color="textPrimary"
                href="#"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Industries
              </Link>
            </RouterLink>
            <RouterLink style={{ color: "black", textDecoration: "none" }}>
              <Link
                // variant="button"
                color="textPrimary"
                href="#"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Blog
              </Link>
            </RouterLink>
            <RouterLink style={{ color: "black", textDecoration: "none" }}>
              <Link
                // variant="button"
                color="textPrimary"
                href="#"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none" }}
              >
                Book a Demo
              </Link>
            </RouterLink>
            {/* <div> */}
            {!isAuth && (
              <RouterLink
                to="/auth-login"
                style={{ color: "black", textDecoration: "none" }}
              >
                <Link
                  // variant="button"
                  color="textPrimary"
                  href="#"
                  variant="subtitle1"
                  className={classes.link}
                  // style={{ marginLeft: "50px" }}
                  style={{ textDecoration: "none", marginLeft: "50px" }}
                >
                  Log In
                </Link>
              </RouterLink>
            )}
            {/* </div> */}
          </nav>
          {!isAuth && (
            <RouterLink
              to="/auth-register"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Button
                href="#"
                color="primary"
                variant="subtitle1"
                className={classes.button}
                style={{ marginLeft: "50px", padding: "13px", width: "230px" }}
              >
                Sign up-it's free
              </Button>
            </RouterLink>
          )}
          {isAuth && (
            <RouterLink
              to="/auth-login"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Button
                href="#"
                color="primary"
                variant="subtitle1"
                className={classes.button}
                style={{ marginLeft: "50px", padding: "13px", width: "230px" }}
                onClick={handleLogOut}
              >
                Log Out
              </Button>
            </RouterLink>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
