import { Socket } from "socket.io";
import mongoose from "mongoose";
import Course from "../schema/Course";
import { DBManager } from "../DBManager";

/**
 * @param {Socket} socket - user socket
 */
export async function CreateRoomOn(socket) {
  socket.on("create-room", async () => {
    await DBManager.createCourse({
      name: "test",
      code: "test",
    });
    await DBManager.createStudent({
      username: "hi",
      password: "bye",
      name: "test",
    });
    await DBManager.joinCourse("hi", "test");
    await DBManager.leaveCourse("hi", "test");
    await DBManager.joinCourse("hi", "test");
    await DBManager.incrementScore("hi", "test");
    await DBManager.decrementScore("hi", "test");
    await DBManager.decrementScore("hi", "test");
    console.log(await DBManager.getStudent("hi"));
  });
}
