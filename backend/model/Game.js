export class Game {
  constructor(questions, options, answers, duration) {
    this.questions = questions;
    this.options = options;
    this.answers = answers;
    this.duration = duration;
    this.timer = null;
  }

  getDuration() {
    return this.duration;
  }

  checkAnswer(index, response) {
    if (this.answers[index - 1].includes(response)) {
      return true;
    } else {
      return false;
    }
  }

  toDto() {
    return {
      questions: this.questions,
      options: this.options,
    }
  }
}
