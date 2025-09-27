export default function RestInfo({restData}){
    return(
        <>
        <div className="w-full flex justify-between mb-2 pb-2 mt-4">
            <div className="w-[70%]">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
                <p className="text-xl">{"₹"+restData?.defaultPrice/100}</p>
                <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>
                    {restData?.description}
                </p>
            </div>
            <div className="w-[20%] relative">
                <img className="w-full h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
                <button className="absolute top-29 rounded-xl left-[35%] text-green-600 px-5 py-1 shadow-md border border-white border-white bg-white">Add</button>
            </div>
        </div>
        <hr></hr>
        </>
    )
}