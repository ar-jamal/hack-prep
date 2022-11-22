import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from "../SCREENS/DASHBOARdScREENS/ADminPAnel";
import NotFound from "../SCREENS/DASHBOARdScREENS/NOtFOund";
import MainScreen from "../SCREENS/MAinSCreen";
import ResultScreen from "../SCREENS/REsultSCreen";
import Signup from "../SCREENS/SIgnUp";
import Signin from "../SCREENS/SIngIn";
import StudentForm from "../SCREENS/STudentFOrm";

export default function AppRouter() {
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Router>
                <Routes>
                    <Route index element={<MainScreen />} />
                    <Route element={<StudentForm />} />
                    <Route path="admin/*" element={<AdminPanel />} />
                    <Route path="resultScreen" element={<ResultScreen />} />
                    <Route path="signin" element={<Signin />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}