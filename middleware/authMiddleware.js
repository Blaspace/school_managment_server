import jwt from "jsonwebtoken";
import School from "../schema/schoolSchema.js";

const Authentication = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes("Bearer")) {
    return res.status(401).send("Token does not start with Bearer");
  }
  const accessToken = authHeader.split(" ")[1];
  const school = await School.findOne({ accessToken  });
 if (school) {
    //req.school = { schoolId: school._id, schoolName: school.schoolName };
      try {
        const payload = jwt.verify(accessToken, process.env.JWT_SECRETE);
        req.school = school;
        next();
      } catch (error) {
        return res.status(401).send("Authentication invalid");
      }
  } else {
    return res.status(401).send("School does not exist");
  }
};

export default Authentication