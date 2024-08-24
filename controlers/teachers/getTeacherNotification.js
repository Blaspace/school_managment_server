/** @format */

import Notification from "../../schema/notification.js";

const handleGetTeacherNotification = async (req, res) => {
  const { teacher } = req;
  try {
    const notification = await Notification.find({ toId: teacher._id });
    res.send(notification);
  } catch (err) {
    console.log(err);
  }
};

export default handleGetTeacherNotification;
