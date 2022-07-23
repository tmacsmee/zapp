function Timer() {
    return (
        <div className="flex flex-col w-full h-full items-center justify-around">
            <div className="bg-white text-center w-56 rounded-xl p-4">Timer</div>
            <div className="flex flex-row justify-center items-center w-full h-full space-x-4">
                <div className="flex bg-primary rounded-xl p-4">a</div>
                <div className="flex bg-primary rounded-xl p-4">b</div>
                <div className="flex bg-primary rounded-xl p-4">c</div>
            </div>
        </div>
    );
}

export default Timer;