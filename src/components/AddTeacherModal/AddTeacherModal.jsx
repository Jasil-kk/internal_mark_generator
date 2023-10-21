import React, { useState } from "react";
import classes from "./AddTeacherModal.module.css";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const AddTeacherModal = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.addTeacherModal_main}>
      <div className={classes.addTeacherModal_card}>
        <h2 className={classes.heading_text}>Add teacher</h2>
        <p className={classes.para_text}>
          Set a username and password for the teacher login.
        </p>
        <Box
          component="form"
          sx={{
            marginTop:"3.5ch",
            width: "32ch",
            display:"flex",
            flexDirection:"column",
            gap:"2.5ch"
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Full name"
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
            sx={{ width: "100%" }}
          />
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
            sx={{ width: "100%" }}
          />

          <FormControl variant="outlined" sx={{ width: "100%" }}>
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
          </FormControl>
        </Box>
        <Stack spacing={2} direction="row" marginTop={5} marginLeft={"auto"}>
          <Button
            variant="text"
            sx={{
              fontSize: "15px",
              color: "#EFB8C8",
              borderRadius: 6,
              padding: "8px",
              textTransform: "capitalize",
              ":hover": { background: "rgba(208, 188, 255, 0.08)" },
            }}
            onClick={props.handleModal}
          >
            Cancel
          </Button>
          <Button
            variant="text"
            sx={{
              fontSize: "15px",
              color: "#D0BCFF",
              padding: "5px",
              borderRadius: 6,
              textTransform: "capitalize",
              ":hover": { background: "rgba(208, 188, 255, 0.08)" },
            }}
          >
            Next
          </Button>
        </Stack>
      </div>
      <div className={classes.modal_closer} onClick={props.handleModal}></div>
    </div>
  );
};

export default AddTeacherModal;
