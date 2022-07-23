import { Game } from "../model/Game.js";

let games = new Map();

export class GameManager {
  static createGame(courseCode, questions, options, answers, duration) {
    const newGame = new Game(questions, options, answers, duration);
    games.set(courseCode, newGame);
  }

  static startGame(courseCode) {
    let duration = games[courseCode].getDuration();
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        // timer = duration;
      }
    }, 1000);
  }
}
