/** @format */

import express from "express";
import teacherAuthentication from "../middleware/teacherAuthMiddlewear.js";
import handleNotify from "../controlers/teachers/teacherNotification.js";
import handleTeacherLogin from "../controlers/teachers/teacherLogin.js";
import handleGetCurrentTeacher from "../controlers/teachers/getCurrentTeacher.js";
import handleGetTeacherSchool from "../controlers/teachers/getTeacherSchool.js";
import handleGetTeacherStudent from "../controlers/teachers/getTeacherStudent.js";
import handleGetTeacherNotification from "../controlers/teachers/getTeacherNotification.js";
import handleTeacherLogout from "../controlers/teachers/teacherLogout.js";
import handleUploadResult from "../controlers/teachers/UploadResult.js";
import handleGetTeacherResult from "../controlers/teachers/getTeacherResult.js";
import handleUpload from "../controlers/teachers/teacherImageUpload.js";
import upload from "../middleware/imageUploadMiddleware.js";
import handleUploadMaterial from "../controlers/teachers/UploadMaterial.js";
import handleGetMaterial from '../controlers/teachers/getMateria.js'

const teacherRoute = express.Router();

teacherRoute.post("/teacher/notify/:id", teacherAuthentication, handleNotify);

teacherRoute.post("/teacher/result", teacherAuthentication, handleUploadResult);

teacherRoute.post(
  "/teacher/image",
  teacherAuthentication,
  upload,
  handleUpload
);

teacherRoute.post(
  "/teacher/material",
  teacherAuthentication,
  upload,
  handleUploadMaterial
);

teacherRoute.get(
  "/teacher/material",
  teacherAuthentication,
  handleGetMaterial
);

teacherRoute.get(
  "/teacher/result",
  teacherAuthentication,
  handleGetTeacherResult
);

teacherRoute.get(
  "/teacher/current",
  teacherAuthentication,
  handleGetCurrentTeacher
);

teacherRoute.get(
  "/teacher/school",
  teacherAuthentication,
  handleGetTeacherSchool
);

teacherRoute.get(
  "/teacher/student",
  teacherAuthentication,
  handleGetTeacherStudent
);

teacherRoute.get(
  "/teacher/notification",
  teacherAuthentication,
  handleGetTeacherNotification
);

teacherRoute.get("/teacher/logout", teacherAuthentication, handleTeacherLogout);

teacherRoute.post("/teacher/login", handleTeacherLogin);

export default teacherRoute;
