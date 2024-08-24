/** @format */

import express from "express";
import handleAddSchool from "../controlers/schools/addSchool.js";
import handleGetStudent from "../controlers/schools/getStudent.js";
import handleAddStudent from "../controlers/schools/addStudent.js";
import handleDeleteStdent from "../controlers/schools/deleteStudent.js";
import handleDeleteTeacher from "../controlers/schools/deleteTeacher.js";
import handleAddTeacher from "../controlers/schools/addTeacher.js";
import handleGetTeacher from "../controlers/schools/getTeacher.js";
import handleLogin from "../controlers/schools/login.js";
import Authentication from "../middleware/authMiddleware.js";
import handleLogout from "../controlers/schools/logout.js";
import handleGetSchool from "../controlers/schools/getSchool.js";
import handleAddBilling from "../controlers/schools/addBilling.js";
import handleGetBilling from "../controlers/schools/getBilling.js";
import handleSchoolNotification from "../controlers/schools/schoolNotification.js";
import handleGetstudentResult from "../controlers/students/getStudentResult.js";

const route = express.Router();

route.post("/school/add", handleAddSchool);

route.get("/student", Authentication, handleGetStudent);

route.get("/student/result", Authentication, handleGetstudentResult);

route.post("/student/add", Authentication, handleAddStudent);

route.get("/student/delete/:id", Authentication, handleDeleteStdent);

route.post("/billing/add", Authentication, handleAddBilling);

route.get("/billing", Authentication, handleGetBilling);

route.get("/teacher/delete/:id", Authentication, handleDeleteTeacher);

route.post("/teacher/add", Authentication, handleAddTeacher);

route.get("/teacher", Authentication, handleGetTeacher);

route.post("/notify/:id", Authentication, handleSchoolNotification);

route.post("/login", handleLogin);

route.get("/school", Authentication, handleGetSchool);

route.get("/logout", Authentication, handleLogout);

export default route;
