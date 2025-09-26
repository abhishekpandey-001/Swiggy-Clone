import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant(){
    const [Restdata, setRestdata] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const proxyserver = "http://cors-anywhere.herokuapp.com/"
            const swiggyAPI ="https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1"
            const response = await fetch(proxyserver+swiggyAPI);
            const data = await response.json();
            setRestdata(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }

        fetchData()
    }, [])

    // console.log(Restdata)



    return(
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            {
                Restdata.map((restinfo)=><RestCard key={restinfo?.info?.id} restinfo={restinfo}></RestCard>)
            }
        </div>
    )

}