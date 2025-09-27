import RestInfo from "./RestInfo"

export default function MenuCard({menuitems}){



    if("categories" in menuitems){
        return(
            <div className="w-full">
                <p className="text-3xl font-bold mb-4">{menuitems?.title}</p>
                <div>
                    {menuitems?.categories?.map((items)=><MenuCard key={items?.title} menuitems={items}></MenuCard>)}
                </div>
            </div>
        )
    }

    return(
        <div className="w-full">
            <p className="text-2xl font-bold">{menuitems.title}</p>
            <div>
                {
                    menuitems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
                }
            </div>
        </div>
    )
}