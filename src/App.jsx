import "./App.css";
import Login from "./pages/Login/Login";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import TeacherPanel from "./pages/TeacherPanel/TeacherPanel";
import SemesterPage from "./pages/SemesterPage/SemesterPage";
import SubjectsPage from "./pages/SubjectsPage/SubjectsPage";
import TeachersPage from "./pages/TeacherPage/TeacherPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import SingleStudent from "./pages/SingleStudent/SingleStudent";
import InternalMarkPage from "./pages/InternalMarkPage/InternalMarkPage";
import { Route, Routes } from "react-router-dom";
import StudentList from "./pages/StudentList/StudentList";

function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <div className="app">
      {token ? (
        <>
          {role === "admin" ? (
            <Routes>
              <Route path="/" element={<AdminPanel />} />
              <Route path="/semesters" element={<SemesterPage />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/internalMarks" element={<InternalMarkPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<TeacherPanel />} />
              <Route path="/students/:id" element={<StudentList />} />
              <Route path="/singlestudent/:id/:studentId" element={<SingleStudent />} />
            </Routes>
          )}
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
