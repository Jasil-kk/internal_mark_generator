import React, { useState } from "react";
import classes from "./AddSubjectModal.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const AddSubjectModal = (props) => {
  const [data, setData] = useState({
    semester: "",
    subject: "",
  });

  const handleChange = (e) => {
    setData({ ...data, semester: e.target.value });
  };

  return (
    <div className={classes.addSubjectModal_main}>
      <div className={classes.addSubjectModal_card}>
        <h3 className={classes.heading_text}>Add subject</h3>
        <p className={classes.para_text}>
          Select the semester to which you want to add the subject.
        </p>
        <FormControl fullWidth sx={{ marginTop: 3 }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "#CAC4D0",
            }}
          >
            Select semester
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.semester}
            label="Select semester"
            onChange={handleChange}
            SelectDisplayProps={{
              classes: {
                root: classes.inputRoot,
                notchedOutline: classes.inputBorder,
              },
              style: { color: "#CAC4D0" },
            }}
            MenuProps={{
              MenuListProps: {
                style: {
                  background: "#211F26",
                  color: "#E6E0E9",
                  boxShadow:
                    " 0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
                },
              },
            }}
          >
            <MenuItem
              value={1}
              sx={{
                padding: "10px 25px",
                ":hover": { background: "#E6E0E914" },
              }}
            >
              Semester 01
            </MenuItem>
            <MenuItem
              value={2}
              sx={{
                padding: "10px 25px",
                ":hover": { background: "#E6E0E914" },
              }}
            >
              Semester 02
            </MenuItem>
            <MenuItem
              value={3}
              sx={{
                padding: "10px 25px",
                ":hover": { background: "#E6E0E914" },
              }}
            >
              Semester 03
            </MenuItem>
            <MenuItem
              value={4}
              sx={{
                padding: "10px 25px",
                ":hover": { background: "#E6E0E914" },
              }}
            >
              Semester 04
            </MenuItem>
            <MenuItem
              value={5}
              sx={{
                padding: "10px 25px",
                ":hover": { background: "#E6E0E914" },
              }}
            >
              Semester 05
            </MenuItem>
            <MenuItem
              value={6}
              sx={{
                padding: "10px 25px",
                ":hover": { background: "#E6E0E914" },
              }}
            >
              Semester 06
            </MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-controlled"
          label="Subject name"
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
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
          sx={{ marginTop: 3 }}
        />

        <Stack spacing={1} direction="row" marginTop={5} marginLeft={"auto"}>
          <Button
            variant="text"
            sx={{
              fontSize: "14px",
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
              fontSize: "14px",
              color: "#D0BCFF",
              borderRadius: 6,
              textTransform: "capitalize",
              ":hover": { background: "rgba(208, 188, 255, 0.08)" },
            }}
          >
            Add
          </Button>
        </Stack>
      </div>
      <div className={classes.modal_closer} onClick={props.handleModal}></div>
    </div>
  );
};

export default AddSubjectModal;
