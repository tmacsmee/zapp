import { useState } from 'react';

import QuestionModule from "./QuestionModule";

const styles = {
    gridBox: `flex justify-center items-center h-44 w-full bg-secondary rounded-md shadow-md p-4`,
}

function GameGrid( props ) {

    const randArr = [0, 1, 2, 2, 1, 0, 2, 0]

    const [ lives, setLives ] = useState(3)

    function getLives() {
        setLives(lives - 1)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full max-w-6xl mx-auto justify-items-center mt-10">
            <div className={styles.gridBox}>
                <QuestionModule type={randArr[0]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4"/>
            </div>
            
            <div className={styles.gridBox}>
                <QuestionModule type={randArr[1]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4"/>
            </div>
            
            <div className={styles.gridBox}>
                <QuestionModule type={randArr[2]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4" />
            </div>

            <div className={styles.gridBox}>
                <QuestionModule type={randArr[3]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4" />    
            </div>
            
            <div className={styles.gridBox}>
                <QuestionModule type={3} lives={lives} />
            </div>

            <div className={styles.gridBox}>
                <QuestionModule type={randArr[4]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4" />
            </div>

            <div className={styles.gridBox}>
                <QuestionModule type={randArr[5]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4"/>
            </div>

            <div className={styles.gridBox}>
                <QuestionModule type={randArr[6]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4"/>
            </div>

            <div className={styles.gridBox}>
                <QuestionModule type={randArr[7]} correct={false} answer={3} lives={getLives} option1="option1" option2="option2" option3="option3" option4="option4" />
            </div>
        </div>
    );
}

export default GameGrid;