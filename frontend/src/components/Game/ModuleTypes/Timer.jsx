import { useContext } from "react";
import { AppContext } from "../../../AppContextProvider";

const heart = (
  <div className="object-contain w-12">
    <img src="pixel-heart.svg" alt="Pixel heart" />
  </div>
);

function Timer(props) {
  const { minutes, seconds } = useContext(AppContext);

  function Hearts() {
    var hearts = [<div></div>, <div></div>, <div></div>];
    for (let i = 0; i < props.lives; i++) {
      hearts[i] = heart;
    }
    return hearts;
  }

  return (
    <div className="flex flex-col w-full h-full items-center justify-around space-y-2">
      <div className="bg-white text-center w-full rounded-xl p-4 text-4xl font-semibold shadow-inner">
        {`${minutes}:${seconds}`}
      </div>
      <div className="flex flex-row justify-center items-center w-full h-full space-x-4">
        <div className="flex justify-center items-center bg-primary w-full h-full rounded-xl p-4 shadow-inner">
          {Hearts()[0]}
        </div>
        <div className="flex justify-center items-center bg-primary w-full h-full rounded-xl p-4 shadow-inner">
          {Hearts()[1]}
        </div>
        <div className="flex justify-center items-center bg-primary w-full h-full rounded-xl p-4 shadow-inner">
          {Hearts()[2]}
        </div>
      </div>
    </div>
  );
}

export default Timer;
