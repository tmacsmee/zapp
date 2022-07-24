import express from "express";
import path from "path";
import { createServer } from "http";
import { initSocketServer, getSocketIO } from "./socket/index.js";
import {
  CreateCourseOn,
  CreateStudentOn,
  JoinCourseOn,
  LeaveCourseOn,
  CreateGameOn,
  StartGameOn,
  JoinGameOn,
  SubmitResponseOn,
  LogInOn
} from "./socket/on.js";
import mongoose from "mongoose";

const ROOMS = new Map();

// Setup Express
const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 8080;

// Setup JSON parsing for the request body
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://zapp:lubricatedducks@cluster0.mk2ihx1.mongodb.net/Zapp",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

// Setup our routes.
initSocketServer(httpServer);

const io = getSocketIO();

io.on("connection", (socket) => {
  CreateCourseOn(socket);
  CreateStudentOn(socket);
  LogInOn(socket);
  JoinCourseOn(socket);
  LeaveCourseOn(socket);
  CreateGameOn(socket);
  StartGameOn(socket);
  JoinGameOn(socket);
  SubmitResponseOn(socket);
});

// Make the "public" folder available statically
app.use(express.static(path.join(__dirname, "public")));

// Serve up the frontend's "build" directory, if we're running in production mode.
if (process.env.NODE_ENV === "production") {
  console.log("Running in production!");

  // Make all files in that folder public
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // If we get any GET request we can't process using one of the server routes, serve up index.html by default.
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}

httpServer.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

// app.listen(process.env.PORT || 3000);
