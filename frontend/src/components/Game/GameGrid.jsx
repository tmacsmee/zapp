import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../AppContextProvider";

import QuestionModule from "./QuestionModule";

const styles = {
  gridBox: `flex justify-center items-center h-44 w-full bg-secondary rounded-md shadow-md p-4`,
};

function GameGrid() {
  const { questions, options } = useContext(AppContext);
  const [lives, setLives] = useState(3);

  function getLives() {
    setLives(lives - 1);
  }

  return (
    <div className="grid grid-cols-3 gap-4 h-full max-w-6xl mx-auto justify-items-center mt-10">
      <div className={styles.gridBox}>
        <QuestionModule type="0" question={questions[0]} options={options[0]} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="1" question={questions[4]} options={options[4]} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="2" question={questions[2]} options={options[2]} answer={2} lives={getLives} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="1" question={questions[1]} options={options[1]} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="3" lives={lives} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="0" question={questions[3]} options={options[3]} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="2" question={questions[5]} options={options[5]} answer={1} lives={getLives} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="0" question={questions[6]} options={options[6]} />
      </div>

      <div className={styles.gridBox}>
        <QuestionModule type="2" question={questions[7]} options={options[7]} answer={5} lives={getLives} />
      </div>
    </div>
  );
}

export default GameGrid;
