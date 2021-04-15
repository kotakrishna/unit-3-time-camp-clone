import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getUserId } from "../Redux/action";
import { Redirect } from "react-router-dom";
// export default function AuthLogin() {
//   // const isAuth = useSelector((state) => state.isAuth);

//   const user = {
//     username: "timeCamp@timer",
//   };
//   // console.log(userId);
//   // console.log(userId);

// dispatch(getUserProjectId(userId));
//   // React.useEffect(() => {}, []);
//   const [page, setPage] = React.useState(false);
//   const handleLogin = () => {
// dispatch(getUserId(user.username));
//     setPage(true);
//   };
//   // const userId = useSelector((state) => state.userId);
//   // console.log(userId);
//   // dispatch(getUserProjectId(userId));
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Login</h1>
//           <button onClick={handleLogin}>User Login</button>
//         </div>
//       </div>
//       {page ? <Redirect to="/inner-page" /> : null}
//     </>
//   );
// }

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://cdn.timecamp.com/res/css/images/hs-banner-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "green",
    width: "100px",
    marginLeft: "-120px",
    padding: "10px",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));

export default function AuthLogin() {
  const isAuth = useSelector((state) => state.log.isAuth);
  React.useEffect(() => {
    console.log(isAuth);
  }, [isAuth]);
  const dispatch = useDispatch();
  const initial = {
    username: "",
    password: "",
  };
  const [login, setLogin] = React.useState(initial);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    dispatch(getUserId(login));
  };
  const classes = useStyles();

  return !isAuth ? (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={3} className={classes.image} />
      <Grid
        style={{
          marginLeft: "300px",
          width: "500px",
          height: "500px",
          margin: "auto",
        }}
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg" /> */}
            <img
              width="150px"
              margin="0px"
              padding="0px"
              src="https://app.timecamp.com//res/css/images/greenbranding/TC-logo.svg"
              alt=""
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in to TimeCamp
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <div style={{ display: "flex" }}>
              <Typography
                component="h1"
                variant="h6"
                style={{ marginTop: "30px" }}
              >
                Email:
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
                style={{ width: "400px", marginLeft: "90px" }}
                value={login.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Typography
                component="h1"
                variant="h6"
                style={{ marginTop: "30px" }}
              >
                Password:
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
                value={login.password}
                onChange={(e) => handleChange(e)}
                style={{ width: "400px", marginLeft: "50px" }}
              />
            </div>
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
              // backgroundColor=""
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  ) : (
    <Redirect to="inner-page" />
  );
}
