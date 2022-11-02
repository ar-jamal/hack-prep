import { Route, Router, Routes } from "react-router-dom";
import AdminPanel from "../Screens/DashboardScreens/adminPanel";
import StudentForm from "../Screens/studentForm";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentForm />} />
                <Route path="adminpanel/*" element={<AdminPanel />} />
            </Routes>
        </Router>
    )
}