import { dineoutRestaurants } from "../Utils/DinData"
import DineCard from "./DineCard"

export default function DineOption(){
    return(
        <>
        {
            dineoutRestaurants.map((DineData)=><DineCard key={DineData?.info?.id} DineData={DineData}></DineCard>)
        }
        </>
    )
}