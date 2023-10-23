import React, { useState } from "react";
import classes from "./InternalMarkPage.module.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import markIcon from "../../assets/internal_dark.png";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import styled from "@emotion/styled";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#424242",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InternalMarkPage = () => {
  const [semester, setSemester] = useState("");
  const semesters = [
    "semester 01",
    "semester 02",
    "semester 03",
    "semester 04",
    "semester 05",
    "semester 06",
  ];

  const rows = [
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Muhsin M",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Walter White",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Ben Johnson",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Ridley Scott",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "1",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "45",
    },
    {
      no: "5",
      regNo: "369345",
      name: "Muhammed Jasil ",
      subject1: "50",
      subject2: "70",
      subject3: "43",
      subject4: "42",
      subject5: "45",
      subject6: "48",
      subject7: "90",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.internalMarkPage_main}>
        <PageHeader navText="Internal Mark" />
        <div className={classes.button_row}>
          <FormControl sx={{ width: "30ch" }}>
            <InputLabel
              id="demo-simple-select-label"
              classes={{ root: classes.labelRoot }}
            >
              Select semester
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={semester}
              label="Select semester"
              onChange={(e) => setSemester(e.target.value)}
              sx={{
                textTransform: "capitalize",
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
                    textTransform: "capitalize",
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
          <Button
            variant="contained"
            startIcon={<BorderAllIcon />}
            size="large"
            sx={{
              background: "#381E72",
              textTransform: "unset",
              fontWeight: "500",
              ":hover": { background: "#381E72" },
            }}
          >
            Export to sheet
          </Button>
        </div>
        {/* <div className={classes.noMarks_container}>
          <img src={markIcon} alt="Icon" className={classes.marks_icon} />
          <p className={classes.noMarks_text}>
            Internal marks for this semester's students have not been added
            yet!"
          </p>
        </div> */}
        <div className={classes.table_container}>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: "100%", maxWidth: "100%" }}
          >
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{ color: "white" }}
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left" style={{ minWidth: 50 }}>
                    RollNo.
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 100 }}>
                    Reg No.
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 300 }}>
                    Name
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 150 }}>
                    Digital Computer principles
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 150 }}>
                    Microcontroller
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 150 }}>
                    Computer Architecture
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 150 }}>
                    Cloud Computing
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 150 }}>
                    Computer System Hardware
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 150 }}>
                    Engineering Graphics
                  </StyledTableCell>
                  <StyledTableCell align="left" style={{ minWidth: 150 }}>
                    Engineering Physics
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell align="left">{row.no}</StyledTableCell>
                    <StyledTableCell align="left">{row.regNo}</StyledTableCell>
                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.subject1}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.subject2}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.subject3}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.subject4}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.subject5}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.subject6}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.subject7}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default InternalMarkPage;
