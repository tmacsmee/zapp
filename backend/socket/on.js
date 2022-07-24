import { DBManager } from "../manager/DBManager";
import { GameManager } from "../manager/GameManager";

export function CreateCourseOn(socket) {
  socket.on("create-course", async (course, callback) => {
    const result = await DBManager.createCourse(course);
    if (callback) {
      callback(result);
    }
  });
}

export function CreateStudentOn(socket) {
  socket.on("create-student", async (student, callback) => {
    const result = await DBManager.createStudent(student);
    if (callback) {
      callback(result);
    }
  });
}

export function LogInOn(socket) {
  socket.on("login-student", async ({ username, password }, callback) => {
    const student = await DBManager.getStudent(username);
    if (student && callback) {
      if (student.password == password) {
        callback(student);
      } else {
        callback(null);
      }
    }
  });
}

export function JoinCourseOn(socket) {
  socket.on("join-course", async ({ username, courseCode }, callback) => {
    const result = await DBManager.joinCourse(username, courseCode);
    if (callback) {
      if (result) {
        const student = await DBManager.getStudent(username);
        callback(student);
      } else {
        callback(null);
      }
    }
  });
}

export function LeaveCourseOn(socket) {
  socket.on("leave-course", async ({ username, courseCode }, callback) => {
    const result = await DBManager.leaveCourse(username, courseCode);
    if (callback) {
      if (result) {
        const student = await DBManager.getStudent(username);
        callback(student);
      } else {
        callback(null);
      }
    }
  });
}

export function CreateGameOn(socket) {
  socket.on("create-game", ({ courseCode, gameInfo }, callback) => {
    const result = GameManager.createGame(courseCode, gameInfo);
    if (callback) {
      callback(result);
    }
  });
}

export function StartGameOn(socket) {
  socket.on("start-game", (courseCode) => {
    GameManager.startGame(courseCode);
  });
}

export function JoinGameOn(socket) {
  socket.on("join-game", (courseCode, callback) => {
    const result = GameManager.getGame(courseCode).toDto();

    if (callback) {
      if (result) {
        socket.join(courseCode);
        callback(result);
      } else {
        callback(null);
      }
    }
  });
}

export function SubmitResponseOn(socket) {
  socket.on("submit-response", ({ courseCode, index, response }, callback) => {
    const game = GameManager.getGame(courseCode);
    if (game && callback) {
      const result = game.checkAnswer(index, response);
      callback(result);
    }
  });
}
