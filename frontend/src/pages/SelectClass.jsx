export default function SelectClass() {
    return(
        <div className="mt-10 w-[50%] mx-auto flex flex-col justify-center">
            <h1 className="text-5xl mx-auto mb-5">
                Select Class
            </h1>

            <button className="w-[50%] py-5 mx-auto text-3xl border-black border-2 rounded-full hover:bg-gray-200 relative group">
                Science
                <button className="absolute right-5 invisible group-hover:visible hover:bg-red-400 rounded-full px-2 py-">
                ✕	
                </button>
            </button>
            <button className="w-[50%] py-5 mx-auto my-3 text-3xl border-black border-2 rounded-full hover:bg-gray-200 relative group">
                Maths
                <button className="absolute right-5 invisible group-hover:visible hover:bg-red-400 rounded-full px-2">
                ✕	
                </button>
            </button>
            <button className="w-[50%] py-5 mx-auto my-3 text-3xl border-black border-2 rounded-full hover:bg-gray-200 relative group">
                Reading
                <button className="absolute right-5 invisible group-hover:visible hover:bg-red-400 rounded-full px-2">
                ✕	
                </button>
            </button>

            <button className="p-0 pb-3 mx-auto my-3 w-[70px] text-5xl border-black border-2 rounded-full hover:bg-gray-200 relative group">
                +
            </button>

        </div>
    )
}