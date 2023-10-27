import React, { useEffect, useState } from "react";
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
import axiosApi from "../../AxiosMethod";
import * as XLSX from "xlsx";

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
    backgroundColor: "#201E24",
    color: "#fff",
    borderColor: "#5B5B5B",
    textTransform: "capitalize",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: " #fff",
    borderColor: "#5B5B5B",
    textTransform: "capitalize",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#141218",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#141218",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const InternalMarkPage = () => {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [semesters, setSemesters] = useState([]);
  const [internalMark, setInternalMark] = useState([]);

  useEffect(() => {
    axiosApi.get("/store/semester/").then((response) => {
      setSemesters(response.data);
    });
  }, []);

  const handleSelectSemester = (semesterId) => {
    setSelectedSemester(semesterId);
    axiosApi
      .get(`/store/admin/list/internalmark/?semester_id=${semesterId}`)
      .then((response) => {
        setInternalMark(response.data);
      });
  };

  const formatTotalMark = (mark) => mark ? mark.toFixed(0) : "0";

  // Export To Sheet Function Starts Here

  function convertTableToXLSX() {
    try {
      // Get the table data
      const table = document.querySelector("table");
      const tableData = XLSX.utils.table_to_sheet(table);

      // Set the column widths
      const wscols = [
        { wch: 5 }, // Column A width
        { wch: 15 }, // Column B width
        { wch: 25 }, // Column C width
        { wch: 25 }, // Column D width
        { wch: 25 }, // Column E width
        { wch: 25 }, // Column F width
        { wch: 25 }, // Column G width
        { wch: 25 }, // Column H width
        { wch: 25 }, // Column I width
        { wch: 25 }, // Column J width
        { wch: 25 }, // Column K width
        { wch: 25 }, // Column L width
        { wch: 25 }, // Column M width
        { wch: 25 }, // Column N width
        { wch: 25 }, // Column O width
        { wch: 25 }, // Column P width
        { wch: 25 }, // Column Q width
        { wch: 25 }, // Column R width
        { wch: 25 }, // Column S width
        { wch: 25 }, // Column T width
        { wch: 25 }, // Column U width
      ];
      tableData["!cols"] = wscols;

      // Create a workbook and add the table data to it
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, tableData, "Sheet1");

      // Convert the workbook to a binary string
      const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

      // Create a blob from the binary string
      const blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream",
      });

      // Create a downloadable link for the blob
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "table_data.xlsx";
      a.click();
    } catch (error) {
      console.error("Error while exporting to XLSX:", error);
    }
  }

  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  }

  // Export To Sheet Function Ends Here

  console.log(internalMark);

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
              label="Select semester"
              value={selectedSemester}
              onChange={(event) => {
                const selectedSemesterId = event.target.value;
                handleSelectSemester(selectedSemesterId);
              }}
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
              {semesters?.map((semester) => (
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
          {internalMark.length !== 0 && (
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
              onClick={convertTableToXLSX}
            >
              Export to sheet
            </Button>
          )}
        </div>
        {internalMark.length !== 0 ? (
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
                    {internalMark?.[0]?.theory_marks &&
                      internalMark?.[0]?.theory_marks?.map((subject) => (
                        <StyledTableCell
                          key={subject?.id}
                          align="left"
                          style={{ minWidth: 300 }}
                        >
                          {subject?.subject_name}
                        </StyledTableCell>
                      ))}
                    {internalMark?.[0]?.lab_marks &&
                      internalMark?.[0]?.lab_marks?.map((subject) => (
                        <StyledTableCell
                          key={subject?.id}
                          align="left"
                          style={{ minWidth: 300 }}
                        >
                          {subject?.subject_name}
                        </StyledTableCell>
                      ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {internalMark?.map((data, index) => (
                    <StyledTableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell align="left">
                        {data?.student?.roll_number}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {data?.student?.register_number}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {data?.student?.name}
                      </StyledTableCell>

                      {data?.theory_marks &&
                        data?.theory_marks?.map((subject) => (
                          <StyledTableCell key={subject?.id} align="left">
                            {formatTotalMark(subject?.total_internal_mark)}
                          </StyledTableCell>
                        ))
                      }

                      {data?.lab_marks &&
                        data?.lab_marks?.map((subject) => (
                          <StyledTableCell key={subject?.id} align="left">
                            {formatTotalMark(subject?.total_lab_mark)}
                          </StyledTableCell>
                        ))}
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ) : (
          <div className={classes.noMarks_container}>
            <img src={markIcon} alt="Icon" className={classes.marks_icon} />
            <p className={classes.noMarks_text}>
              Internal marks for this semester's students have not been added
              yet!"
            </p>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default InternalMarkPage;
