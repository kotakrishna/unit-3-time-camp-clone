// export default function AuthRegister() {
//   return <div>Registration Page</div>;
// }

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { postUserId } from "../Redux/action";
import { v4 as uuid } from "uuid";
import LoadingSign from "../Components/LoadingSign";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "150px",
    height: "50px",
    borderRadius: "0px ",
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
    width: "120%",
    marginLeft: "0px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));

export default function AuthRegister() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.log.isLoading);
  const initialUser = {
    userId: uuid(),
    listOfProjects: [],
    username: "",
    password: "",
    phoneNumber: "",
  };
  const [user, setUser] = React.useState(initialUser);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setUser({ ...user, userId: uuid(), listOfProjects: [] });
    console.log(user);
    dispatch(postUserId(user));
  };

  return isLoading ? (
    <LoadingSign />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg" /> */}
          <img
            width="150px"
            margin="0px"
            padding="10px"
            src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
            alt=""
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up for Free
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={1.7} style={{ width: "500px" }}>
            <Grid item xs={12}>
              <div style={{ display: "flex" }}>
                <Typography
                  component="h1"
                  variant="subtitle2"
                  style={{ marginTop: "30px" }}
                >
                  Email
                </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                  autoFocus
                  style={{ width: "400px", marginLeft: "87px" }}
                  value={user.username}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex" }}>
                <Typography
                  component="h1"
                  variant="subtitle2"
                  style={{ marginTop: "30px" }}
                >
                  Password
                </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                  style={{ width: "400px", marginLeft: "60px" }}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex" }}>
                <Typography
                  component="h1"
                  variant="subtitle2"
                  style={{ marginTop: "30px", marginLeft: "-20px" }}
                >
                  Phone Number (optional)
                </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  optional
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="text"
                  id="password"
                  // autoComplete="current-password"
                  value={user.phoneNumber}
                  onChange={(e) => handleChange(e)}
                  style={{ width: "400px", marginLeft: "0px" }}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                style={{ color: "grey" }}
                control={
                  <Checkbox
                    defaultChecked
                    color="secondary"
                    value="allowExtraEmails"
                    // color="primary"
                  />
                }
                label="I agree to Terms of Service and Privacy Policy"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </Button>
          <Typography
            component="h1"
            variant="subtitle2"
            style={{ marginTop: "0px", width: "480px" }}
            justify="space-around"
          >
            <hr />
          </Typography>
          <Grid container justify="space-around">
            <Grid item>
              <Link
                to="/auth-login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ width: "490px", marginLeft: "90px" }}
                  className={classes.submit}
                >
                  Log in
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}
