import React, { useEffect, useState } from "react";
import classes from "./AdminPanel.module.css";
import adminIcon from "../../assets/admin_icon.svg";
import visiblity from "../../assets/visibility.svg";
import face from "../../assets/face.png";
import menuBook from "../../assets/menu_book.png";
import bookmark from "../../assets/bookmark.svg";
import school from "../../assets/school.png";
import summarize from "../../assets/summarize.png";
import noteStack from "../../assets/semester.png";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import ItemCard from "../../components/ItemCard/ItemCard";
import InternalDeleteModal from "../../components/InternalDeleteModal/InternalDeleteModal";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../AxiosMethod";

const AdminPanel = () => {
  const [logoutModal, setLogoutModal] = useState(false);
  const [counts, setCounts] = useState({
    semesters: "",
    subjects: "",
    teachers: "",
    students: "",
  });
  const navigate = useNavigate();

  const handleLogoutModal = () => {
    setLogoutModal(!logoutModal);
  };

  // Logout Function
  const handleLogout = () => {
    axiosApi.post("/projectaccount/logout/").then((response) => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("id");
      window.location.reload();
    }).catch(()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("id");
      window.location.reload();
    })
  };

  // Count Getting
  useEffect(() => {
    const fetchCounts = async () => {
      const semesterResponse = axiosApi.get("/store/semester/");
      const subjectResponse = axiosApi.get("/store/subject/");
      const teacherResponse = axiosApi.get("/store/teacher/registration/");
      const studentResponse = axiosApi.get("/store/student/add/");

      try {
        const [semesters, subjects, teachers, students] = await Promise.all([
          semesterResponse,
          subjectResponse,
          teacherResponse,
          studentResponse,
        ]);

        setCounts({
          semesters: semesters.data?.[0]?.total_semester_count || 0,
          subjects: subjects.data?.[0]?.total_subject_count || 0,
          teachers: teachers.data?.[0]?.total_teachers_count || 0,
          students: students.data?.[0]?.total_students_count || 0,
        });
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  const formatCountWithLeadingZeros = (count) => {
    return count?.toString().padStart(2, "0");
  };

  return (
    <>
      <div className={classes.adminPanel_main}>
        <img src={adminIcon} alt="Icon" className={classes.admin_icon} />
        <h1 className={classes.heading_text}>Administrator</h1>
        <p className={classes.para_text}>
          ©Internal Mark Generator for Diploma Revision 2021
        </p>
        <LogoutBtn onClick={handleLogoutModal} />
        <div className={classes.item_card_container}>
          <ItemCard
            backgroundIcon={noteStack}
            nameText="Semesters"
            count={
              counts?.semesters
                ? formatCountWithLeadingZeros(counts?.semesters)
                : 0
            }
            labelIcon={bookmark}
            onClick={() => navigate("/semesters")}
          />
          <ItemCard
            backgroundIcon={menuBook}
            nameText="Subjects"
            count={
              counts?.subjects
                ? formatCountWithLeadingZeros(counts?.subjects)
                : 0
            }
            labelIcon={bookmark}
            onClick={() => navigate("/subjects")}
          />
          <ItemCard
            backgroundIcon={face}
            nameText="Teachers"
            count={
              counts?.teachers
                ? formatCountWithLeadingZeros(counts?.teachers)
                : 0
            }
            labelIcon={bookmark}
            onClick={() => navigate("/teachers")}
          />
          <ItemCard
            backgroundIcon={school}
            nameText="Students"
            count={
              counts?.students
                ? formatCountWithLeadingZeros(counts?.students)
                : 0
            }
            labelIcon={bookmark}
            onClick={() => navigate("/students")}
          />
          <ItemCard
            backgroundIcon={summarize}
            nameText="Internal Mark"
            count="Report"
            labelIcon={visiblity}
            onClick={() => navigate("/internalMarks")}
          />
        </div>
      </div>
      {logoutModal && (
        <InternalDeleteModal
          handleAccept={handleLogout}
          handleCancel={handleLogoutModal}
          heading="Confirm logout"
          para="Are you sure you want to log out of your account?"
          cancelText="Cancel"
          acceptText="Logout"
        />
      )}
    </>
  );
};

export default AdminPanel;
