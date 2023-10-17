import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./Login.module.css";
import logo from "../../assets/logo.svg";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormHelperText } from "@mui/material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            helperText="That username doesn't exist"
            FormHelperTextProps={{
              style: { color: "#EC928E" },
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
            <FormHelperText
              id="outlined-adornment-password"
              sx={{ color: "#EC928E" }}
            >
              The password you entered is incorrect
            </FormHelperText>
          </FormControl>
          <div className={classes.login_btn}>
            <SubmitButton text="Login" />
          </div>
        </form>
      </div>
      <p className={classes.label_text}>
        ©Internal Mark Generator for Diploma Revision 2021
      </p>
    </div>
  );
};

export default Login;
