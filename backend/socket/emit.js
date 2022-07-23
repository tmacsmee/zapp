import { getSocketIO } from "./index.js";

export function UpdateTimer(courseCode, time) {
  getSocketIO().to(courseCode).emit("timer-update", time);
}
