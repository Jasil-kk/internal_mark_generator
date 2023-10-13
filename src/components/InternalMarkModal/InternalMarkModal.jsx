import React from "react";
import classes from "./InternalMarkModal.module.css";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InternalMarkModal = (props) => {
  return (
    <div className={classes.internalMarkModal_main}>
      <div className={classes.internalMarkModal_card}>
        <h2 className={classes.heading_text}>Add internal mark</h2>
        <label htmlFor="Series exam mark" className={classes.label_text}>
          Series exam mark
        </label>
        <Box
          component="form"
          sx={{
            width: "34ch",
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
            gap: 2,
            marginTop: "1ch",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="SE1"
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
          <TextField
            id="outlined-uncontrolled"
            label="SE2"
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
          <TextField
            id="outlined-uncontrolled"
            label="SE3"
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
        </Box>
        <label htmlFor="Series exam mark" className={classes.label_text}>
          Assignment mark
        </label>
        <Box
          component="form"
          sx={{
            width: "34ch",
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
            gap: 2,
            marginTop: "1ch",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="ASSG1"
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
          <TextField
            id="outlined-uncontrolled"
            label="ASSG2"
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
          <TextField
            id="outlined-uncontrolled"
            label="ASSG3"
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
        </Box>
        <label htmlFor="Series exam mark" className={classes.label_text}>
          Attendance in %
        </label>
        <Box
          component="form"
          sx={{
            width: "10ch",
            marginTop: "1ch",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-uncontrolled"
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
        </Box>
        <div className={classes.add_btn}>
          <SubmitButton text="Add" />
        </div>
      </div>
      <div className={classes.modal_closer} onClick={props.handleModal}></div>
    </div>
  );
};

export default InternalMarkModal;
