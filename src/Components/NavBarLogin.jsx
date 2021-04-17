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
import { useDispatch } from "react-redux";
import { userLogout } from "../Redux/action";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DonutSmallTwoToneIcon from "@material-ui/icons/DonutSmallTwoTone";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ComputerIcon from "@material-ui/icons/Computer";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "../App.css";
// import HoverComponent from "./HoverComponent";
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
    flexGrow: 0.1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: "15px",
    color: "black",
    "&:hover": {
      color: "#039259",
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
}));

export default function NavBarLogin() {
  //   const isAuth = useSelector((state) => state.log.isAuth);
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
              <img height="35px" src="/ICON-TC-sygnet.svg" alt="ICON" />
            </RouterLink>
          </Typography>
          <nav
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              gridColumnGap: "10px",
            }}
          >
            <RouterLink
              to="/timesheets"
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <AccessTimeIcon style={{ height: "20px" }} />
                <Typography variant="subtitle2">Time Sheets</Typography>
              </Link>
            </RouterLink>
            <RouterLink
              to="/reports-page"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <DonutSmallTwoToneIcon style={{ height: "18px" }} />
                <Typography variant="subtitle2">Reports</Typography>
              </Link>
            </RouterLink>
            <RouterLink
              to="/inner-page"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                style={{ textDecoration: "none", display: "flex" }}
              >
                <FolderOpenIcon style={{ height: "18px" }} />
                <Typography variant="subtitle2"> Projects </Typography>
                {/* Projects */}
              </Link>
            </RouterLink>
            <RouterLink
              to="/inner-page"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                onMouseEnter
                style={{ textDecoration: "none", display: "flex" }}
              >
                <Typography variant="subtitle2">
                  <ComputerIcon style={{ height: "18px" }} />
                  Computer Time
                </Typography>
                {/* Projects */}
              </Link>
            </RouterLink>
          </nav>
          {/* ( */}
          <nav
            style={{
              marginLeft: "100px",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
            }}
          >
            <RouterLink
              to="/inner-page"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                onMouseEnter
                style={{ textDecoration: "none", display: "flex" }}
              >
                <SettingsIcon style={{ height: "18px" }} />
              </Link>
            </RouterLink>
            <RouterLink
              to="/inner-page"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                onMouseEnter
                style={{ textDecoration: "none", display: "flex" }}
              >
                {/* <SettingsIcon style={{ height: "18px" }} /> */}

                <Button
                  href="#"
                  color="primary"
                  variant="subtitle1"
                  className={classes.button}
                  style={{
                    padding: "5px",
                    width: "70px",
                    borderRadius: "10px",
                    backgroundColor: "#f3bd0d",
                  }}
                  onClick={handleLogOut}
                >
                  Upgrade
                </Button>
              </Link>
            </RouterLink>
            <RouterLink
              to="/inner-page"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Link
                // variant="button"
                color="textPrimary"
                variant="subtitle1"
                className={classes.link}
                onMouseEnter
                style={{ textDecoration: "none", display: "flex" }}
              >
                <HelpOutlineIcon style={{ height: "18px" }} />
              </Link>
            </RouterLink>

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
                onMouseLeave
              >
                <AccountCircleIcon style={{ height: "18px" }} />
                Log Out
              </Button>
            </RouterLink>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
