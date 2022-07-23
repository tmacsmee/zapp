import Dial from "../../../assets/testDial.png";
import React, {useState} from "react";

export default function WireGame(props){

    const [dialPos, setDialPos] = useState(0);

    const handleDial = () => {
        if(dialPos===3){
            setDialPos(0);
        }else{
            setDialPos(dialPos+1);
        }
    }



    return(
        <div className="w-full h-full flex ">
            <div>
                <h2 className="">What is M in MERN</h2>
                <ol>
                    <li>1. moneky</li>
                    <li>2. mongolia</li>
                    <li>3. money</li>
                    <li>4. Mongo</li>
                </ol>
            </div>

            <div>
                <p className="rotate-90"></p>
                <p className="rotate-180"> </p>
                <p className="rotate-270"></p>
                <p className="rotate-360"></p>
                <img src={Dial} className={"rotate-" + dialPos*90 + " py-4 duration-100 " } onClick={handleDial}/>
                <h3 className="absolute top-0"></h3>
            </div>
        
        </div>
    );

}

