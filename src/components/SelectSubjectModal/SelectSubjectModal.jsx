import React, { useState } from "react";
import classes from "./SelectSubjectModal.module.css";
import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  "&.Mui-checked": {
    color: theme.status.danger,
  },
}));

const theme = createTheme({
  status: {
    danger: "#D0BCFF",
  },
});

const SelectSubjectModal = (props) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = (subject) => () => {
    const isSubjectChecked = checked.includes(subject);
    const newChecked = [...checked];

    if (isSubjectChecked) {
      newChecked.splice(newChecked.indexOf(subject), 1);
    } else {
      newChecked.push(subject);
    }

    setChecked(newChecked);
  };

  const courses = [
    { subject: "Engineering Mathematics", semester: "semster 01" },
    { subject: "Microcontroller", semester: "semster 01" },
    { subject: "Digital Computer Principles", semester: "semster 01" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.selectSubjectModal_main}>
        <div className={classes.selectSubjectModal_card}>
          <h2 className={classes.heading_text}>Select subjects </h2>
          <p className={classes.para_text}>
            Select the subjects of this teacher
          </p>
          <List sx={{ marginTop: 2 }} className={classes.list}>
            {courses.map((course) => {
              const labelId = `checkbox-list-label-${course.subject}`;
              return (
                <ListItem
                  key={course.subject}
                  secondaryAction={
                    <CustomCheckbox
                      color="secondary"
                      edge="end"
                      onChange={handleToggle(course.subject)}
                      checked={checked.includes(course.subject)}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                  onClick={handleToggle(course.subject)}
                  className={classes.listItem}
                >
                  <ListItemButton>
                    <ListItemText
                      id={labelId}
                      primary={course.subject}
                      secondary={course.semester}
                      secondaryTypographyProps={{ style: { color: "#a29ea6" } }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Stack spacing={2} direction="row" marginTop={3} marginLeft={"auto"}>
            <Button
              variant="text"
              sx={{
                fontSize: "16px",
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
                fontSize: "16px",
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

export default SelectSubjectModal;
