import { useState } from 'react';

const styles = {
    cut: `w-full h-6 cursor-pointer rounded-full drop-shadow-md`,
}

function WireGame( props ) {
    
    const [ redIsCut, setRedIsCut ] = useState(false);
    const [ greenIsCut, setGreenIsCut ] = useState(false);
    const [ blueIsCut, setBlueIsCut ] = useState(false);

    const handleRedClick = () => {
        if (!redIsCut && !greenIsCut && !blueIsCut) {
            setRedIsCut(true);
        }
        console.log("test1")
    }

    const handleGreenClick = () => {
        if (!redIsCut && !greenIsCut && !blueIsCut) {
            setGreenIsCut(true);
        }
        console.log("test2")
    }

    const handleBlueClick = () => {
        if (!redIsCut && !greenIsCut && !blueIsCut) {
            setBlueIsCut(true);
        }
    }


    return (
        <div className="relative flex flex-row w-full h-full space-between">
            
            <div className="flex flex-col space-y-3 justify-center items-center w-full mr-3 ml-3 z-10">

                <div className="flex flex-row w-full space-x-4" onClick={handleRedClick}>
                    <div className="bg-red-600 w-full h-6 cursor-pointer rounded-full"></div>
                    <div className={`bg-red-600 ${redIsCut ? styles.cut : "absolute"}`}></div>
                </div>
                
                <div className="flex flex-row w-full space-x-4" onClick={handleGreenClick}>
                    <div className="bg-green-500 w-full h-6 cursor-pointer rounded-full"></div>
                    <div className={`bg-green-500 ${greenIsCut ? styles.cut : "absolute"}`}></div>
                </div>

                <div className="flex flex-row w-full space-x-4" onClick={handleBlueClick}>
                    <div className="bg-blue-500 w-full h-6 cursor-pointer rounded-full"></div>
                    <div className={`bg-blue-500 ${blueIsCut ? styles.cut : "absolute"}`}></div>
                </div>

            </div>
            <div className="w-10 h-36 bg-gray-400 rounded-md absolute z-0"></div>
            <div className="w-10 h-36 bg-gray-400 rounded-md absolute right-0 z-0"></div>
        </div>
    );
}

export default WireGame;