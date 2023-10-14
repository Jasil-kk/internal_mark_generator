import React, { useState } from "react";
import classes from "./InternalMarkModal.module.css";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InternalMarkModal = (props) => {
  const [data, setData] = useState({
    se1: "",
    se2: "",
    se3: "",
    assg1: "",
    assg2: "",
    assg3: "",
    attendance: "",
  });

  const handleFieldChange = (e, fieldName) => {
    const formattedNumber = e.target.value.replace(/\D/g, "");

    if (formattedNumber.length <= 2) {
      setData({ ...data, [fieldName]: formattedNumber });
    }
  };

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
            value={data.se1}
            onChange={(e) => handleFieldChange(e, "se1")}
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
            value={data.se2}
            onChange={(e) => handleFieldChange(e, "se2")}
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
            value={data.se3}
            onChange={(e) => handleFieldChange(e, "se3")}
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
            value={data.assg1}
            onChange={(e) => handleFieldChange(e, "assg1")}
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
            value={data.assg2}
            onChange={(e) => handleFieldChange(e, "assg2")}
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
            value={data.assg3}
            onChange={(e) => handleFieldChange(e, "assg3")}
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
            value={data.attendance}
            onChange={(e) => handleFieldChange(e, "attendance")}
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
