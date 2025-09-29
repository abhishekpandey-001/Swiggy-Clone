import { useState } from "react";
import { useParams } from "react-router"

export default function SearchFood(){

    const id = useParams();
    const [food, setFood] = useState("");
    return(
        <div className="w-[80%] mx-auto mt-20">
            <input placeholder="Search here" className="w-full px-10 py-4 text-2xl bg-gray-200 rounded-2xl border" onChange={(e)=>setFood(e.target.value)}></input>
        </div>
    )
}