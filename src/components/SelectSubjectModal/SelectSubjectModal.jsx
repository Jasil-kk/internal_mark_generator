import React, { useEffect, useState } from "react";
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
import axiosApi from "../../AxiosMethod";

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
  const [subjects, setSubjects] = useState([]);

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

  useEffect(() => {
    axiosApi.get("/store/subject/").then((response) => {
      setSubjects(response.data);
    });
  }, []);

  const handleSubmit = () => {
    props.handleSubmit(checked);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.selectSubjectModal_main}>
        <div className={classes.selectSubjectModal_card}>
          <h2 className={classes.heading_text}>Select subjects </h2>
          <p className={classes.para_text}>
            Select the subjects of this teacher
          </p>
          <List sx={{ marginTop: 2 }} className={classes.list}>
            {subjects?.map((subject) => {
              const labelId = `checkbox-list-label-${subject?.id}`;
              return (
                <ListItem
                  key={subject?.id}
                  secondaryAction={
                    <CustomCheckbox
                      color="secondary"
                      edge="end"
                      onChange={handleToggle(subject?.id)}
                      checked={checked.includes(subject?.id)}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                  onClick={handleToggle(subject?.id)}
                  className={classes.listItem}
                >
                  <ListItemButton>
                    <ListItemText
                      id={labelId}
                      primary={subject?.name}
                      secondary={subject?.semester_name}
                      primaryTypographyProps={{textTransform:"capitalize"}}
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
              onClick={handleSubmit}
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
