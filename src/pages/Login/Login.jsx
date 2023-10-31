import React, { useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./Login.module.css";
import logo from "../../assets/logo.svg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import axiosApi from "../../AxiosMethod";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState({ open: false, type: "", text: "" });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen({ open: false, type: "", text: "" });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (data.username === "" || data.password === "") {
      setOpen({
        open: true,
        type: "warning",
        text: " Username or Password cannot be empty.",
      });
      setIsLoading(false);
      return;
    }
    axiosApi
      .post("/projectaccount/login/", data)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("id", response.data.pk);
        setIsLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        setOpen({
          open: true,
          type: "error",
          text: "Usename or Password is incorrect!",
        });
        setIsLoading(false);
      });
  };

  return (
    <div className={classes.login_main}>
      <div className={classes.login_card}>
        <img src={logo} alt="Logo" className={classes.logo_image} />
        <h1 className={classes.heading_text}>Login</h1>
        <p className={classes.para_text}>Login to your account</p>
        <form action="" className={classes.login_form} autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            InputProps={{
              classes: {
                root: classes.inputRoot,
                notchedOutline: classes.inputBorder,
              },
              inputProps: { style: { color: "#CAC4D0" } },
            }}
            InputLabelProps={{
              style: { color: "#CAC4D0" },
            }}
          />
          <FormControl variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              classes={{ root: classes.labelRoot }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{ color: "#CAC4D0" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              inputProps={{ style: { color: "#CAC4D0" } }}
              classes={{
                root: classes.inputRoot,
                notchedOutline: classes.inputBorder,
              }}
            />
          </FormControl>
          <div className={classes.login_btn}>
            <SubmitButton
              text="Login"
              onClick={handleLogin}
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
      <p className={classes.label_text}>
        ©Internal Mark Generator for Diploma Revision 2021
      </p>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={open.type && open.type}
          sx={{ width: "100%" }}
        >
          {open.text}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
