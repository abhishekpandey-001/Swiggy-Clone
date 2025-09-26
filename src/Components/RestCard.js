

export default function RestCard({restinfo}){
    return(
        <div className="mb-2 transform transition duration-200 hover:scale-95 cursor-pointer">
        <img className="w-70 h-45 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo?.info?.cloudinaryImageId}></img>
        <div className="w-[90%] mx-auto mt-3 ">
            <div className="font-bold text-xl w-[200px] truncate min-w-0">{restinfo?.info?.name}</div>
            <div className="flex gap-2 items-center">
                {/* Entering a svg here to make it look good */}
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="22"
                 height="22"
                 viewBox="0 0 24 24"
                >
                 <circle cx="12" cy="12" r="12" fill="#15803D" />
                 <path
                  d="M12 2.5l2.9 5.88 6.5.94-4.7 4.58 1.1 6.46L12 17.77l-5.8 3.05 1.1-6.46-4.7-4.58 6.5-.94L12 2.5z"
                  fill="white"
                 />
                </svg>
                <span className="text-lg">{restinfo?.info?.avgRating}</span>
                <span className="text-lg font-semibold">{restinfo?.info?.sla?.slaString}</span>
            </div>
            <div className="text-gray-600 w-[150px] truncate min-w-0">{restinfo?.info?.cuisines.join(" ")}</div>
        </div>
        </div>
    )
}