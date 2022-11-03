import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from "../Screens/DashboardScreens/adminPanel";
import NotFound from "../Screens/DashboardScreens/NotFound";
import StudentForm from "../Screens/studentForm";

export default function AppRouter() {
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Router>
                <Routes>
                    <Route index element={<StudentForm />} />
                    <Route path="admin/*" element={<AdminPanel />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}