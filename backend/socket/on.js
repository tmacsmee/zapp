import { DBManager } from "../manager/DBManager";

export function CreateCourseOn(socket) {
  socket.on("create-course", async (course, callback) => {
    const result = DBManager.createCourse(course);
    if (callback) {
      callback(result);
    }
  });
}

export function CreateStudentOn(socket) {
  socket.on("create-student", async (student, callback) => {
    const result = DBManager.createStudent(student);
    if (callback) {
      callback(result);
    }
  });
}

export function JoinCourseOn(socket) {
  socket.on("join-course", async ({ username, courseCode }, callback) => {
    const result = DBManager.joinCourse(username, courseCode);
    if (callback) {
      if (result) {
        callback(DBManager.getStudent(username));
      } else {
        callback(null);
      }
    }
  });
}

export function LeaveCourseOn(socket) {
  socket.on("leave-course", async ({ username, courseCode }, callback) => {
    const result = DBManager.leaveCourse(username, courseCode);
    if (callback) {
      if (result) {
        callback(DBManager.getStudent(username));
      } else {
        callback(null);
      }
    }
  });
}
