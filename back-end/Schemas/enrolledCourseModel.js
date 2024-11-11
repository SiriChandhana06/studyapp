const mongoose = require("mongoose");

const enrolledCourseSchema = mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    course_Length: {
      type: Number,
      required: true,
    },
    progress: [{}],
    certificateDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("enrolledCourses", enrolledCourseSchema);