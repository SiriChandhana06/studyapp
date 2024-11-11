const userSchema = require("../schemas/userModel");
const courseSchema = require("../schemas/courseModel");
const enrolledCourseSchema = require("../schemas/enrolledCourseModel");
const coursePaymentSchema = require("../schemas/coursePaymentModel");

const getAllUsersController = async (req, res) => {
  try {
    const allUsers = await userSchema.find();
    if (allUsers == null || !allUsers) {
      return res.status(401).send({ message: "No users found" });
    }
    res.status(200).send({ success: true, data: allUsers });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: `${error.message}` });
  }
};

const getAllCoursesController = async (req, res) => {
  try {
    const allCourses = await courseSchema.find();
    if (allCourses == null || !allCourses) {
      return res.status(401).send({ message: "No courses found" });
    }
    res.status(200).send({ success: true, data: allCourses });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ success: false, message: `${error.message}` });
  }
};

const deleteCourseController = async (req, res) => {
  const { courseid } = req.params; // Use the correct parameter name
  try {
    // Attempt to delete the course by its ID
    const course = await courseSchema.findByIdAndDelete({ _id: courseid });

    // Check if the course was found and deleted successfully
    if (course) {
      res
        .status(200)
        .send({ success: true, message: "Course deleted successfully" });
    } else {
      res.status(404).send({ success: false, message: "Course not found" });
    }
  } catch (error) {
    console.error("Error in deleting course:", error);
    res
      .status(500)
      .send({ success: false, message: "Failed to delete course" });
  }
};

const deleteUserController = async (req, res) => {
  const { userid } = req.params; // Use the correct parameter name
  try {
    // Attempt to delete the course by its ID
    const user = await userSchema.findByIdAndDelete({ _id: userid });

    // Check if the course was found and deleted successfully
    if (user) {
      res
        .status(200)
        .send({ success: true, message: "User deleted successfully" });
    } else {
      res.status(404).send({ success: false, message: "User not found" });
    }
  } catch (error) {
    console.error("Error in deleting user:", error);
    res
      .status(500)
      .send({ success: false, message: "Failed to delete course" });
  }
};

module.exports = {
  getAllUsersController,
  getAllCoursesController,
  deleteCourseController,
  deleteUserController,
};