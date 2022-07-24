import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
