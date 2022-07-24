import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import { socket } from "../App.js";
import { useNavigate } from "react-router-dom";

export default function SelectClass() {
  const { student, setQuestions, setOptions } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(student.courses);

  return (
    <div className="mt-10 w-[50%] mx-auto flex flex-col justify-center">
      <h1 className="text-5xl mx-auto mb-5">Select Class</h1>
      {student.courses.map((course) => (
        <button
          className="w-[50%] py-5 mx-auto text-3xl border-black border-2 rounded-full hover:bg-gray-200 relative group"
          key={course.code}
          onClick={() => {
            socket.emit(
              "create-game",
              {
                courseCode: "SCI101",
                gameInfo: {
                  questions: [
                    "What is neutral pH?",
                    "Which of these is a producer?",
                    "Which is an apex predator?",
                    "Which is water?",
                    "What are types of forces?",
                    "What makes objects fall down?",
                    "Where does a monkey live in?",
                    "How many senses does a human have?",
                  ],
                  options: [
                    ["1", "14", "8", "7"],
                    ["Cow", "Wolf", "Giraffe", "Grass"],
                    ["Donkey", "Shark", "Shrimp", "Pig"],
                    ["HO", "OH", "O2H", "H2O"],
                    ["Push", "Pull", "Twist", "Squash"],
                    ["Gravity", "Friction", "Clumsiness", "Air"],
                    ["Desert", "Forest", "City", "Mountains"],
                    ["4", "12", "10", "5"],
                  ],
                  answers: [[2], [4], [2], [4], [1, 2, 3], [1], [2], [4]],
                  duration: 60,
                },
              },
              (result) => {
                if (result) {
                  console.log("Created Game");
                }
              }
            );
            socket.emit("start-game", "SCI101");
            console.log("started game");
            socket.emit("join-game", "SCI101", (result) => {
              setQuestions(result.questions);
              setOptions(result.options);
              navigate("/main");
            });
          }}
        >
          {course.course.name}
        </button>
      ))}

      <button className="p-0 pb-3 mx-auto my-3 w-[70px] text-5xl border-black border-2 rounded-full hover:bg-gray-200 relative group">
        +
      </button>
    </div>
  );
}
