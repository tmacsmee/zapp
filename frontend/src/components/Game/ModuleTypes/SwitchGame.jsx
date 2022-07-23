import {useState} from 'react'

export default function SwitchGame(props){
    const [switchPos, setSwitchPos] = useState([false,false,false,false]);  

    const handleSwitch = (n) => {
        let newSwitchPos = [false,false,false,false] && switchPos;
        newSwitchPos[n] = !newSwitchPos[n];

        setSwitchPos( newSwitchPos);
        const newArray = switchPos.slice(0);

        setSwitchPos(newArray);
    }

    return(
        <div>
            <div>
                <h2>What is the answers:</h2>
            </div>
            <div className="grid grid-cols-4 w-full h-32">
                <div className= {"group relative w-20 h-full p-2" + (switchPos[0] ? " bg-yellow-300":" bg-gray-200")} onClick={()=>handleSwitch(0)}>
                    <p className='min-w-full absolute invisible bottom-[-70%] translate-y-[-100%] left-[50%] translate-x-[-50%] group-hover:visible bg-white p-2 rounded-md z-10 whitespace-nowrap	'>Option 1: the answer</p>
                    <div className={"w-full bg-white h-1/2 duration-100 " + (switchPos[0] ? "translate-y-[100%]":"")}></div>
                </div>

                <div className= {"group relative w-20 h-full p-2" + (switchPos[1] ? " bg-yellow-300":" bg-gray-200")} onClick={()=>handleSwitch(1)}>
                <p className='min-w-full absolute invisible bottom-[-70%] translate-y-[-100%] left-[50%] translate-x-[-50%] group-hover:visible bg-white p-2 rounded-md z-10 whitespace-nowrap'>not the answers</p>
                    <div className={"w-full bg-white h-1/2 duration-100 " + (switchPos[1] ? "translate-y-[100%]":"")}></div>
                </div>
                <div className= {"group relative w-20 h-full p-2" + (switchPos[2] ? " bg-yellow-300":" bg-gray-200")} onClick={()=>handleSwitch(2)}>
                <p className='min-w-full absolute invisible bottom-[-70%] translate-y-[-100%] left-[50%] translate-x-[-50%] group-hover:visible bg-white p-2 rounded-md z-10 whitespace-nowrap'>not the answer</p>
                    <div className={"w-full bg-white h-1/2 duration-100 " + (switchPos[2] ? "translate-y-[100%]":"")}></div>
                </div>
                <div className= {"group relative w-20 h-full p-2" + (switchPos[3] ? " bg-yellow-300":" bg-gray-200")} onClick={()=>handleSwitch(3)}>
                <p className='min-w-full absolute invisible bottom-[-70%] translate-y-[-100%] left-[50%] translate-x-[-50%] group-hover:visible bg-white p-2 rounded-md z-10 whitespace-nowrap  '>maybe the answer</p>
                    <div className={"w-full bg-white h-1/2 duration-100 " + (switchPos[3] ? "translate-y-[100%]":"")}></div>
                </div>
            </div>
        </div>
    )
}