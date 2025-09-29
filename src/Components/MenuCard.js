import { useState } from "react"
import RestInfo from "./RestInfo"

export default function MenuCard({menuitems, foodselected}){

    const [isOpen, setIsOpen] = useState(true)



    if("categories" in menuitems){
        return(
            <div className="w-full">
                <p className="text-3xl font-bold mb-4">{menuitems?.title}</p>
                <div>
                    {menuitems?.categories?.map((items)=><MenuCard key={items?.title} menuitems={items} foodselected={foodselected}></MenuCard>)}
                </div>
            </div>
        )
    }


    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between ">
            <p className="text-2xl font-bold">{menuitems.title}</p>
            <button className="text-xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }


    if(foodselected==='veg'){
        return(
        <div className="w-full">
            <div className="flex justify-between ">
            <p className="text-2xl font-bold">{menuitems.title}</p>
            <button className="text-xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
            </div>
            <div>
                {
                    menuitems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }


    if(foodselected==='nonveg'){
      return(
        <div className="w-full">
            <div className="flex justify-between ">
            <p className="text-2xl font-bold">{menuitems.title}</p>
            <button className="text-xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
            </div>
            <div>
                {
                    menuitems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
        )
    }


    return(
        <div className="w-full">
            <div className="flex justify-between ">
            <p className="text-2xl font-bold">{menuitems.title}</p>
            <button className="text-xl mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?"▲":"▼"}</button>
            </div>
            <div>
                {
                    menuitems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
}