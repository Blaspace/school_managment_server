import jwt from "jsonwebtoken";
import Teacher from "../schema/teacherSchema.js";

const teacherAuthentication = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes("Bearer")) {
    return res.status(401).send("Token does not start with Bearer");
  }
  const accessToken = authHeader.split(" ")[1];
  const teacher = await Teacher.findOne({ accessToken  });
 if (teacher) {
    //req.teacher = { schoolId: teacher._id, schoolName: teacher.schoolName };
      try {
        const payload = jwt.verify(accessToken, process.env.JWT_SECRETE);
        req.teacher = teacher;
        next();
      } catch (error) {
        return res.status(401).send("Authentication invalid");
      }
  } else {
    return res.status(401).send("Teacher does not exist");
  }
};

export default teacherAuthentication