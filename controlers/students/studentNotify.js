/** @format */

import Notification from "../../schema/notification";

const handleStudentNotify = async (req, res) => {
  const { student } = req;
  const { message } = req.body;
  try {
    const notification = await Notification.create({
      message,
      toId: req.params.id,
      fromId: student._id,
      toCategory: "teacher",
      fromCategory: "student",
      date: Date().slice(0, 24),
    });
    res.send(notification);
  } catch (err) {
    console.log(err);
  }
};
