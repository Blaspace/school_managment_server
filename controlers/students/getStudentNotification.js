/** @format */

import Notification from "../../schema/notification.js";

const handleGetStudentNotification = async (req, res) => {
  const student = req.student;
  try {
    const notification = await Notification.find({ toId: student._id });
    res.send(notification);
  } catch (err) {
    console.log(err);
  }
};

export default handleGetStudentNotification;
