import { useState } from 'react';

const styles = {
    cut: `w-full h-6 cursor-pointer rounded-full drop-shadow-md`,
}

function WireGame( props ) {
    
    const [ redIsCut, setRedIsCut ] = useState(false);
    const [ greenIsCut, setGreenIsCut ] = useState(false);
    const [ blueIsCut, setBlueIsCut ] = useState(false);
    const [ orangeIsCut, setorangeIsCut ] = useState(false);

    const handleRedClick = () => {
        if (!redIsCut && !greenIsCut && !blueIsCut && !orangeIsCut) {
            setRedIsCut(true)
            if (props.answer !== 1) {
                props.lives()
            }
        }
    }

    const handleGreenClick = () => {
        if (!redIsCut && !greenIsCut && !blueIsCut && !orangeIsCut) {
            setGreenIsCut(true);
            if (greenIsCut && props.answer !== 2) {
                props.lives()
            }
        }
    }

    const handleBlueClick = () => {
        if (!redIsCut && !greenIsCut && !blueIsCut && !orangeIsCut) {
            setBlueIsCut(true);
            if (blueIsCut && props.answer !== 3) {
                props.lives()
            }
        }
    }

    const handleorangeClick = () => {
        if (!redIsCut && !greenIsCut && !blueIsCut && !orangeIsCut) {
            setorangeIsCut(true);
            if (orangeIsCut && props.answer !== 4) {
                props.lives()
            }
        }
    }


    return (
        <div className="relative flex flex-row w-full h-full space-between justify-center items-center">
            
            <div className="flex flex-col space-y-3 justify-center items-center w-full mr-3 ml-3 z-10">

                <div className="flex flex-row w-full space-x-4" onClick={handleRedClick}>
                    <div className="flex justify-center bg-red-600 w-full h-6 cursor-pointer rounded-full">{redIsCut ? "" : props.option1}</div>
                    <div className={`bg-red-600 ${redIsCut ? styles.cut : "absolute"}`}></div>
                </div>
                
                <div className="flex flex-row w-full space-x-4" onClick={handleGreenClick}>
                    <div className="flex justify-center bg-green-500 w-full h-6 cursor-pointer rounded-full">{greenIsCut ? "" : props.option2}</div>
                    <div className={`bg-green-500 ${greenIsCut ? styles.cut : "absolute"}`}></div>
                </div>

                <div className="flex flex-row w-full space-x-4" onClick={handleBlueClick}>
                    <div className="flex justify-center bg-blue-500 w-full h-6 cursor-pointer rounded-full">{blueIsCut ? "" : props.option3}</div>
                    <div className={`bg-blue-500 ${blueIsCut ? styles.cut : "absolute"}`}></div>
                </div>

                <div className="flex flex-row w-full space-x-4" onClick={handleorangeClick}>
                    <div className="flex justify-center bg-orange-500 w-full h-6 cursor-pointer rounded-full">{orangeIsCut ? "" : props.option4}</div>
                    <div className={`bg-orange-500 ${orangeIsCut ? styles.cut : "absolute"}`}></div>
                </div>

            </div>
            <div className="w-10 h-36 bg-gray-400 rounded-md absolute left-0 z-0"></div>
            <div className="w-10 h-36 bg-gray-400 rounded-md absolute right-0 z-0"></div>
        </div>
    );
}

export default WireGame;