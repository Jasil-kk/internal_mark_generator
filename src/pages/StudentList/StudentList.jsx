import React, { useEffect, useState } from "react";
import classes from "./StudentList.module.css";
import menuBook from "../../assets/menu_book.svg";
import BackButton from "../../components/BackButton/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../AxiosMethod";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const semesterId = params.id;
  function truncateString(str) {
    if (str.length <= 30) {
      return str;
    }
    return str.slice(0, 30) + "...";
  }

  // Getting Students
  useEffect(() => {
    axiosApi
      .get(`/store/student/add/?semester_id=${semesterId}`)
      .then((response) => {
        setStudents(response.data);
      });
  }, []);

  const formatCountWithLeadingZeros = (count) => {
    return count?.toString().padStart(2, "0");
  };

  return (
    <div className={classes.studentList_main}>
      <BackButton onClick={() => navigate("/")} />
      <img src={menuBook} alt="Icon" className={classes.icon_image} />
      <h2 className={classes.course_name}>Digital Computer Principle</h2>
      <p className={classes.sem_text}>{students?.[0]?.semester_name}</p>
      <div className={classes.StudentList_text}>Students list</div>
      {students.length !== 0 ? (
        <div className={classes.studentCard_container}>
          {students?.map((student) => (
            <div
              key={student?.id}
              className={classes.studentCard}
              onClick={() => navigate(`/singlestudent/${semesterId}/${student?.id}`)}
            >
              <span className={classes.student_number}>
                {formatCountWithLeadingZeros(student?.roll_number)}
              </span>
              <div className={classes.studentName_container}>
                <label className={classes.label_text}>Name</label>
                <h3 className={classes.name_text}>
                  {truncateString(student?.name)}
                </h3>
              </div>
              <span className={classes.reg_text}>
                Reg No: {student?.register_number}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <span className={classes.noStudent_container}>
          No students have been added to this semester yet.
        </span>
      )}
    </div>
  );
};

export default StudentList;
