/** @format */

import Notification from "../../schema/notification.js";

const handleNotify = async (req, res) => {
  const { message, toCategory } = req.body;
  const { teacher } = req;
  try {
    const newMessage = await Notification.create({
      message,
      fromId: teacher._id,
      toId: req.params.id,
      toCategory,
      fromCategory: "teacher",
      date: Date().slice(0, 24),
    });
    res.send({ notification: newMessage });
  } catch (err) {
    console.log(err);
  }
};

export default handleNotify;
