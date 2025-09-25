
export default function DineCard({DineData}){
    return(
        <div className="max-w-sm flex-none">
            <div className="relative">
                <img className="w-80 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+DineData?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute bottom-2 left-2 text-xl text-white">{DineData?.info?.name}</p>
                <p className="absolute bottom-2 right-2 text-xl text-white">{DineData?.info?.rating?.value}</p>
            </div>
        </div>
    )
}