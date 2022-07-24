import React, { useState } from "react";

export default function WireGame(props) {

    const [dialPos, setDialPos] = useState(0);


    const handleDial = () => {
        if (dialPos === 4) {
            setDialPos(0);
            return;
        }
        setDialPos(dialPos + 1);


    }




    return (
        <div className="w-full h-full flex relative">
            <div className="">
                <h2 className="">What is M in MERN</h2>
                <ol>
                    <li>1. moneky</li>
                    <li>2. mongolia</li>
                    <li>3. money</li>
                    <li>4. Mongo</li>
                </ol>
                <button className="m-2 px-1 border-2 border-black rounded-md ">Submit</button>

            </div>

            <div className="relative ml-5 px-4">
                <p className="rotate-90"></p><p className="rotate-180"></p> <p className="rotate-270"></p><p className="rotate-360"></p>

                <div className="w-36 h-36 mt-3 bg-gray-300 border-transparent rounded-full relative shadow-[inset_0_0_0_20px_#777] text-white " onClick={handleDial}>
                    <div className={"w-1 h-12 rounded-sm bg-red-600 absolute bottom-[50%] left-[50%] translate-x-[-50%] origin-bottom " + "rotate-" + dialPos * 90 + (dialPos === 0 ? "" : " duration-100")}></div>
                    <h3 className="absolute top-[-2px] left-[50%] translate-x-[-50%]">1</h3>
                    <h3 className="absolute right-1 top-[50%] translate-y-[-50%]" >2</h3>
                    <h3 className="absolute bottom-[-2px] left-[50%] translate-x-[-50%]">3</h3>
                    <h3 className="absolute left-1 top-[50%] translate-y-[-50%]" >4</h3>
                </div>


            </div>

        </div>
    );

}

