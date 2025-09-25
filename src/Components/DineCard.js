
export default function DineCard({DineData}){
    return(
        <div className="max-w-sm flex-none">
            <a target="_blank" href={DineData?.cta?.link}>
            <div className="relative">
                <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+DineData?.info?.mediaFiles[0]?.url}></img>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                <p className="absolute bottom-2 left-2 text-xl text-white truncate w-3/4 font-bold">{DineData?.info?.name}</p>
                <p className="absolute bottom-2 right-2 text-xl text-white font-bold">{"⭐"+DineData?.info?.rating?.value}</p>
            </div>
            </a>
        </div>
    )
}