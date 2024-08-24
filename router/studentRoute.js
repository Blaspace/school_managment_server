/** @format */

import express from "express";
import studentAuthentication from "../middleware/studentAuthMiddlewar.js";
import handleGetCurrentStudent from "../controlers/students/getCurentStudent.js";
import handleGetStudentSchool from "../controlers/students/getStudentSchool.js";
import handleGetStudentNotification from "../controlers/students/getStudentNotification.js";
import handleStudentLogin from "../controlers/students/studentLogin.js";
import handleGetStudentTeacher from "../controlers/students/getStudentTeacher.js";
import handleStudentLogout from "../controlers/students/studentLogout.js";
import handleGetBilling from "../controlers/students/getSchoolBilling.js";

const studentRoute = express.Router();

studentRoute.post("/student/login", handleStudentLogin);

studentRoute.get(
  "/student/current",
  studentAuthentication,
  handleGetCurrentStudent
);

studentRoute.get(
  "/student/school",
  studentAuthentication,
  handleGetStudentSchool
);

studentRoute.get(
  "/student/teacher",
  studentAuthentication,
  handleGetStudentTeacher
);

studentRoute.get(
  "/student/notification",
  studentAuthentication,
  handleGetStudentNotification
);

studentRoute.post(
    "/student/notify/:id",
    studentAuthentication,
    handleGetStudentNotification
  );

studentRoute.get(
    "/student/logout",
    studentAuthentication,
    handleStudentLogout
  );

  studentRoute.get(
    "/student/billing",
    studentAuthentication,
    handleGetBilling
  );

export default studentRoute;
