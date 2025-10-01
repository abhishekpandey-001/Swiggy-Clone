import { useState } from "react"
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({restData}){


    const dispatch = useDispatch();
    const items = useSelector(state?.cartSlice?.items)
    const element = items.find(item=>item.id===restData.id);
    const count = element? element.quantity:0
    function handleAddItems(){
        
        dispatch(addItems(restData))
    }

    function handleIncrementItems(){
        
        dispatch(IncrementItems(restData))
    }


    function handleDecrementItems(){
        dispatch(DecrementItems(restData))
    }



    return(
        <>
        <div className="w-full flex justify-between mb-2 pb-2 mt-4">
            <div className="w-[70%]">
                <p className="text-2xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
                <p className="text-xl">{"₹"+("defaultPrice" in restData? restData?.defaultPrice/100:restData?.price/100)}</p>
                <span className="text-green-700">{restData?.ratings?.aggregatedRating?.rating}</span>
                <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
                <p>
                    {restData?.description}
                </p>
            </div>


            <div className="w-[20%] relative">
                <img className="w-full h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
                {
                    count===0?(<button className="absolute top-29 rounded-xl left-[35%] text-green-600 px-5 py-1 shadow-md border border-white bg-white" onClick={()=>handleAddItems()}>Add</button>):(
                        <div className="absolute top-29 rounded-xl left-[31%] text-green-600 px-5 py-1 shadow-md border border-white bg-white flex gap-3">
                            <button className="cursor-pointer" onClick={()=>handleDecrementItems()}>-</button>
                            <span>{count}</span>
                            <button className="cursor-pointer" onClick={()=>handleIncrementItems()}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
        <hr></hr>
        </>
    )
}