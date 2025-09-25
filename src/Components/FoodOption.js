import { imageGridCards } from "../Utils/FoodData"
import Foodcard from "./FoodCard"

export default function FoodOption(){
    return(
        <>
        <p className="text-black font-bold text-2xl mt-10 ml-40">Order our best food options</p>
        <div className="w-[80%] container mx-auto overflow-x-auto">
            <div className="flex flex-nowrap gap-3 mt-10">
                <div className="grid grid-rows-2 auto-cols-max grid-flow-col gap-3">
                    {
                        imageGridCards.map((foodData) => (
                            <Foodcard key={foodData.id} foodData={foodData} />
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}
