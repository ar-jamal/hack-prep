import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from "../Screens/DashboardScreens/adminPanel";
import NotFound from "../Screens/DashboardScreens/notFound";
import MainScreen from "../Screens/mainScreen";
import ResultScreen from "../Screens/resultScreen";
import Signup from "../Screens/signup";
import Signin from "../Screens/singin";
import StudentForm from "../Screens/studentForm";
import { getData } from "./firebaseMethods";

export default function AppRouter() {
    // useEffect(() => {
    //     getData("student")
    //     .then((success) => {
    //         console.log(success)
    //         const userVerification= 
    //     })
    //     .then((error) => {
    //         // console.log(error)
    //     })
        
    // },[])
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Router>
                <Routes>
                    <Route index element={<MainScreen />} />
                    <Route path= "studenform" element={<StudentForm />} />
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