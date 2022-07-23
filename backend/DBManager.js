import mongoose from "mongoose";
import Course from "./schema/Course";
import Student from "./schema/Student";

export class DBManager {
  static async createCourse(course) {
    const newCourse = new Course({
      name: course.name,
      code: course.code,
    });

    await newCourse.save();
  }

  static async createStudent(student) {
    const newStudent = new Student({
      username: student.username,
      password: student.password,
      name: student.name,
      courses: [],
    });

    try {
      await newStudent.save();
    } catch (error) {
      console.log("Failed to create student");
    }
  }

  static async joinCourse(username, courseId) {
    const student = await Student.findOne({ username: username });
    const course = await Course.findOne({ code: courseId });

    if (!student || !course) {
      console.log("Failed to find student or course");
    } else {
      const newCourseEntry = {
        course: course._id,
        score: 0,
      };

      student.courses.push(newCourseEntry);
      await student.save();
    }
  }

  static async leaveCourse(username, courseId) {
    const student = await Student.findOne({ username: username });
    const course = await Course.findOne({ code: courseId });

    if (!student || !course) {
      console.log("Failed to find student or course");
    } else {
      console.log(
        student.courses.filter((entry) => entry.course !== course._id)
      );
      student.courses = student.courses.filter(
        (entry) => entry.course.toString() !== course._id.toString()
      );
      await student.save();
    }
  }

  static async incrementScore(username, courseId) {
    const student = await Student.findOne({ username: username });
    const course = await Course.findOne({ code: courseId });

    if (!student) {
      console.log("Failed to find student");
    } else {
      student.courses.forEach((entry) => {
        if (entry.course.toString() == course._id.toString()) {
          entry.score += 1;
        }
      });
      await student.save();
    }
  }

  static async decrementScore(username, courseId) {
    const student = await Student.findOne({ username: username });
    const course = await Course.findOne({ code: courseId });

    if (!student) {
      console.log("Failed to find student");
    } else {
      student.courses.forEach((entry) => {
        if (entry.course.toString() == course._id.toString()) {
          entry.score -= 1;
        }
      });
      await student.save();
    }
  }

  static async getStudent(username) {
    const student = await Student.findOne({ username: username }).populate(
      "courses.course"
    );

    return student;
  }
}
