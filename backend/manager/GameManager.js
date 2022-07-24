import { Game } from "../model/Game.js";
import { UpdateTimer, endGame } from "../socket/emit.js";

let games = new Map();

export class GameManager {
  static createGame(courseCode, gameInfo) {
    const newGame = new Game(gameInfo.questions, gameInfo.options, gameInfo.answers, gameInfo.duration);
    if (games.get(courseCode)) {
      return false;
    }else{
      games.set(courseCode, newGame);
      return true;
    }

  }

  static getGame(courseCode) {
    const game = games.get(courseCode);
    if (game) {
      return game;
    } else {
      return null;
    }
  }

  static startGame(courseCode) {
    const game = this.getGame(courseCode);
    if (game) {
      let duration = games.get(courseCode).getDuration();
      let timer = duration,
        minutes,
        seconds;
      if (game.timer) {
        clearInterval(game.timer);
      }
      game.timer = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        UpdateTimer(courseCode, {
          min: minutes,
          sec: seconds,
        });

        if (--timer < 0) {
          endGame(courseCode);
          games.delete(courseCode);
          clearInterval(game.timer);
        }
      }, 1000);
    }
  }
}
