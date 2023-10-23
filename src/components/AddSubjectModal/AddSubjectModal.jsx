import React, { useState } from "react";
import classes from "./AddSubjectModal.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({});
theme = createTheme(theme, {
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: "#CAC4D0",
      },
      borderColor: { main: "#CAC4D0" },
      name: "salmon",
    }),
  },
});

const AddSubjectModal = (props) => {
  const [data, setData] = useState({
    semester: "",
    subject: "",
  });

  const handleChange = (e) => {
    setData({ ...data, semester: e.target.value });
  };

  const semesters = [
    "semester 01",
    "semester 02",
    "semester 03",
    "semester 04",
    "semester 05",
    "semester 06",
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.addSubjectModal_main}>
        <div className={classes.addSubjectModal_card}>
          <h3 className={classes.heading_text}>Add subject</h3>
          <p className={classes.para_text}>
            Select the semester to which you want to add the subject.
          </p>
          <FormControl fullWidth sx={{ marginTop: 3 }}>
            <InputLabel
              id="demo-simple-select-label"
              classes={{ root: classes.labelRoot }}
            >
              Select semester
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.semester}
              label="Select semester"
              onChange={handleChange}
              sx={{
                color: "#CAC4D0",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#CAC4D0",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#CAC4D0",
                },
                "& .MuiSelect-icon": {
                  color: "#CAC4D0",
                },
              }}
              color="salmon"
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
              {semesters.map((semester) => (
                <MenuItem
                key={semester}
                  value={semester}
                  sx={{
                    padding: "10px 25px",
                    ":hover": { background: "#E6E0E914" },
                  }}
                >
                  {semester}
                </MenuItem>
              ))}
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
              Add
            </Button>
          </Stack>
        </div>
        <div className={classes.modal_closer} onClick={props.handleModal}></div>
      </div>
    </ThemeProvider>
  );
};

export default AddSubjectModal;
