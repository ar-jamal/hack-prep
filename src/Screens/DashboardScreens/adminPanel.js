import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import CourseForm from "./courseForm";
import QuizForm from "./quizForms";
import ResultUpdate from "./resultUpdate";

export default function AdminPanel() {
    return (
        <Box>
            <h3>Admin Panel</h3>
            <Routes>
                <Route path="courseform" element={<CourseForm />} />
                <Route path="quizform" element={<QuizForm />} />
                <Route path="resultupdate" element={<ResultUpdate />} />
            </Routes>
        </Box>
    )
}

