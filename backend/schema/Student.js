import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  courses: [
    {
      course: { type: Schema.Types.ObjectId, ref: "Course" },
      score: Number,
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
