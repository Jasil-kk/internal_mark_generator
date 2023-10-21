import React, { useState } from "react";
import classes from "./SelectSubjectModal.module.css";
import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const SelectSubjectModal = () => {
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const courses = [
    "Engineering Mathematics",
    "Microcontroller",
    "Digital Computer Principles",
  ];

  return (
    <div className={classes.selectSubjectModal_main}>
      <div className={classes.selectSubjectModal_card}>
        <h2 className={classes.heading_text}>Select subjects </h2>
        <p className={classes.para_text}>Select the subjects of this teacher</p>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          {courses.map((course, index) => {
            const labelId = `checkbox-list-label-${index}`;
            return (
              <ListItem
                key={index}
                secondaryAction={
                  <Typography fontSize={10}>Semester 01</Typography>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(index)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(index) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#E6E0E9" }}
                    id={labelId}
                    primary={course}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </div>
      <div className={classes.modal_closer}></div>
    </div>
  );
};

export default SelectSubjectModal;
