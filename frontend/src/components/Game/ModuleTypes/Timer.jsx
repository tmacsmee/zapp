
function Timer() {
    return (
        <div className="flex flex-col w-full h-full items-center justify-around space-y-2">
            <div className="bg-white text-center w-full rounded-xl p-4 text-4xl font-semibold shadow-inner">00:00</div>
            <div className="flex flex-row justify-center items-center w-full h-full space-x-4">
                <div className="flex justify-center items-center bg-primary w-full h-full rounded-xl p-4 shadow-inner">
                    <div className="object-contain w-12"><img src="pixel-heart.svg" alt="Pixel heart" /></div>
                </div>
                <div className="flex justify-center items-center bg-primary w-full h-full rounded-xl p-4 shadow-inner">
                    <div className="object-contain w-12"><img src="pixel-heart.svg" alt="Pixel heart" /></div>
                </div>
                <div className="flex justify-center items-center bg-primary w-full h-full rounded-xl p-4 shadow-inner">
                    <div className="object-contain w-12"><img src="pixel-heart.svg" alt="Pixel heart" /></div>
                </div>
            </div>
        </div>
    );
}

export default Timer;