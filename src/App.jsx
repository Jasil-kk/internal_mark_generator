import "./App.css";
import Login from "./pages/Login/Login";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import TeacherPanel from "./pages/TeacherPanel/TeacherPanel";
import SemesterPage from "./pages/SemesterPage/SemesterPage";
import SubjectsPage from "./pages/SubjectsPage/SubjectsPage";
import TeachersPage from "./pages/TeacherPage/TeacherPage";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import InternalMarkPage from "./pages/InternalMarkPage/InternalMarkPage";
import { Route, Routes } from "react-router-dom";

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
