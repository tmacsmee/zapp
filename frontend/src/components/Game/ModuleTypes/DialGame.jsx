import Dial from "../../../assets/testDial.png";
import React, {useState} from "react";

export default function WireGame(props){

    const [dialPos, setDialPos] = useState(0);


    const handleDial = () => {
        if(dialPos===4){
            setDialPos(0);
            handleDial();
        }else{
            setDialPos(dialPos+1);
        }
    }



    return(
        <div className="w-full h-full flex p-3">
            <div>
                <h2 className="">What is M in MERN</h2>
                <ol>
                    <li>1. moneky</li>
                    <li>2. mongolia</li>
                    <li>3. money</li>
                    <li>4. Mongo</li>
                </ol>
            </div>

            <div className="relative ml-3 px-4">
                <p className="rotate-90"></p><p className="rotate-180"> </p><p className="rotate-270"></p><p className="rotate-360"></p>
                <img src={Dial} className={"rotate-" + dialPos*90 + " py-4 " + (dialPos===0 ? "" : "duration-100") } onClick={handleDial}/>
                <h3 className="absolute top-[-5px] left-[50%]">1</h3>
                <h3 className="absolute right-0 top-[50%]">2</h3>
                <h3 className="absolute bottom-[-5px] left-[50%]">3</h3>
                <h3 className="absolute left-0 top-[50%]">4</h3>
            </div>
        
        </div>
    );

}

