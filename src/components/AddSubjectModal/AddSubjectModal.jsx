import React, { useEffect, useState } from "react";
import classes from "./AddSubjectModal.module.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axiosApi from "../../AxiosMethod";

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
  const [semesters, setSemesters] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [data, setData] = useState({
    semester: "",
    subject: "",
    subjectType: "",
  });

  useEffect(() => {
    axiosApi.get("/store/semester/").then((response) => {
      setSemesters(response.data);
    });
  }, []);

  const subjectTypes = ["Theory", "Lab"];

  const handleAddProduct = () => {
    const input = {
      semester: data.semester,
      name: data.subject,
      role: data.subjectType,
    };
    props.handleAdd(input);
  };

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
              onChange={(e) => {
                setData({ ...data, semester: e.target.value });
                setDisabled(false);
              }}
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
                  key={semester?.id}
                  value={semester?.id}
                  sx={{
                    padding: "10px 25px",
                    ":hover": { background: "#E6E0E914" },
                  }}
                >
                  {semester?.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            disabled={disabled ? true : false}
            id="outlined-controlled"
            label="Subject name"
            value={data.subject}
            onChange={(e) => setData({ ...data, subject: e.target.value })}
            InputProps={{
              classes: {
                root: disabled ? classes.disableRoot : classes.inputRoot,
                notchedOutline: disabled
                  ? classes.disableBorder
                  : classes.inputBorder,
              },
              inputProps: { style: { color: "#CAC4D0" } },
            }}
            InputLabelProps={{
              style: { color: disabled ? "#E6E0E91F" : "#CAC4D0" },
            }}
            sx={{ marginTop: 3 }}
          />

          <FormControl
            fullWidth
            sx={{ marginTop: 3 }}
            disabled={disabled ? true : false}
          >
            <InputLabel
              id="demo-simple-select-label"
              classes={{
                root: disabled ? classes.disableRoot : classes.labelRoot,
              }}
            >
              Subject type
            </InputLabel>
            <Select
              disabled={disabled ? true : false}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={data.subjectType}
              label="Subject type"
              onChange={(e) =>
                setData({ ...data, subjectType: e.target.value })
              }
              sx={{
                color: "#CAC4D0",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: disabled ? "#E6E0E91F" : "#CAC4D0",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: disabled ? "#E6E0E91F" : "#CAC4D0",
                },
                "& .MuiSelect-icon": {
                  color: disabled ? "#E6E0E91F" : "#CAC4D0",
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
              {subjectTypes.map((subjectType) => (
                <MenuItem
                  key={subjectType}
                  value={subjectType}
                  sx={{
                    padding: "10px 25px",
                    ":hover": { background: "#E6E0E914" },
                  }}
                >
                  {subjectType}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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
              onClick={handleAddProduct}
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
