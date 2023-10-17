import React, { useState } from "react";
import classes from "./InternalMarkModal2.module.css";
import SubmitButton from "../SubmitButton/SubmitButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InternalMarkModal2 = (props) => {
  const [data, setData] = useState({
    test1: "",
    test2: "",
    roughRecordMark: "",
    fairRecordMark: "",
    labWorkMark: "",
    openEndedMark: "",
    attendanceInMark: "",
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
          Test mark
        </label>
        <Box
          component="form"
          sx={{
            width: "25ch",
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 3,
            marginTop: "1ch",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="TEST1"
            value={data.test1}
            onChange={(e) => handleFieldChange(e, "test1")}
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
            label="TEST2"
            value={data.test2}
            onChange={(e) => handleFieldChange(e, "test2")}
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
        <Box
          component="form"
          sx={{
            width: "40ch",
            display: "grid",
            gridTemplateColumns: { sm: "1fr 0.9fr" },
            gap: 4,
            marginTop: "5ch",
            paddingTop: "5ch",
            borderTop: "1px solid #5C5862"

          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="Rough record mark"
            value={data.roughRecordMark}
            onChange={(e) => handleFieldChange(e, "roughRecordMark")}
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
            label="Fair record mark"
            value={data.fairRecordMark}
            onChange={(e) => handleFieldChange(e, "fairRecordMark")}
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
        <Box
          component="form"
          sx={{
            width: "38ch",
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1.2fr" },
            gap: 4,
            marginTop: "5ch",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="Lab work mark"
            value={data.labWorkMark}
            onChange={(e) => handleFieldChange(e, "labWorkMark")}
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
            label="Open-ended mark"
            value={data.openEndedMark}
            onChange={(e) => handleFieldChange(e, "openEndedMark")}
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
        <Box
          component="form"
          sx={{
            width: "19ch",
            marginTop: "5ch",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-uncontrolled"
            label="Attendance in mark"
            value={data.attendanceInMark}
            onChange={(e) => handleFieldChange(e, "attendanceInMark")}
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

export default InternalMarkModal2;
