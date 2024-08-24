import jwt from "jsonwebtoken";
import School from "../schema/schoolSchema.js";
import Student from "../schema/studentSchema.js";

const studentAuthentication = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes("Bearer")) {
    return res.status(401).send("Token does not start with Bearer");
  }
  const accessToken = authHeader.split(" ")[1];
  const student = await Student.findOne({ accessToken  });
 if (student) {
    //req.student = { schoolId: student._id, schoolName: student.schoolName };
      try {
        const payload = jwt.verify(accessToken, process.env.JWT_SECRETE);
        req.student = student;
        next();
      } catch (error) {
        return res.status(401).send("Authentication invalid");
      }
  } else {
    return res.status(401).send("School does not exist");
  }
};

export default studentAuthentication