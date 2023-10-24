import React, { useState } from "react";
import classes from "./AddSemesterModal.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const AddSemesterModal = (props) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count !== 6) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  

  const handleAddSemester = () => {
    let formatedCount = "";
    if(count === 1) {
      formatedCount = "first semester"
    }
    if(count === 2) {
      formatedCount = "second semester"
    } if(count === 3) {
      formatedCount = "third semester"
    } if(count === 4) {
      formatedCount = "fourth semester"
    } if(count === 5) {
      formatedCount = "fifth semester"
    } if(count === 6) {
      formatedCount = "sixth semester"
    }
    props.handleAdd(formatedCount);
  }
  console.log(count);


  const formattedCount = count.toString().padStart(2, "0");
  return (
    <div className={classes.addSemesterModal_main}>
      <div className={classes.addSemesterModal_card}>
        <h3 className={classes.heading_text}>Add Semesters</h3>
        <p className={classes.para_text}>
          Enter the number of semesters you would like to add.
        </p>
        <Stack spacing={1} alignItems={"center"} marginTop={3} direction="row">
          <IconButton
            aria-label="RemoveIcon"
            sx={{
              ":hover": { background: "#36343B" },
              border: "1px solid #CAC4D0",
            }}
            onClick={handleDecrease}
          >
            <RemoveIcon sx={{ color: "#CAC4D0", fontSize: 22 }} />
          </IconButton>
          <Box
            sx={{
              width: 48,
              height: 48,
              backgroundColor: "#36343B",
              display: "grid",
              borderRadius: 2,
              placeItems: "center",
            }}
          >
            <Typography variant="h5" component="h5" fontWeight={500}>
              {formattedCount}
            </Typography>
          </Box>
          <IconButton
            aria-label="AddIcon"
            sx={{
              ":hover": { background: "#36343B" },
              border: "1px solid #CAC4D0",
            }}
            onClick={handleIncrease}
          >
            <AddIcon sx={{ color: "#CAC4D0", fontSize: 22 }} />
          </IconButton>
        </Stack>
        <Stack spacing={1} direction="row" marginTop={4} marginLeft={"auto"}>
          <Button
            variant="text"
            sx={{
              fontSize: "14px",
              color: "#EFB8C8",
              borderRadius: 6,
              padding: "10px",
              textTransform: "capitalize",
            }}
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
            }}
            onClick={handleAddSemester}
          >
            Add
          </Button>
        </Stack>
      </div>
      <div className={classes.modal_closer} onClick={props.handleModal}></div>
    </div>
  );
};

export default AddSemesterModal;
