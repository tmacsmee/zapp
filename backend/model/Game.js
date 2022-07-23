export class Game {
  constructor(questions, options, answers, duration) {
    this.questions = questions;
    this.options = options;
    this.answers = answers;
    this.duration = duration;
  }

  getDuration() {
    return this.duration;
  }

  checkAnswer(index, response) {
    if (response in this.answers[index - 1]) {
      return true;
    } else {
      return false;
    }
  }
}
