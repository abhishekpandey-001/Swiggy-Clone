
export default function DineCard({DineData}){
    return(
        <div className="w-[80%] container mx-auto mt-10 flex">
        <img className="w-[100%]" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+DineData?.info?.mediaFiles[0]?.url}></img>
        </div>
    )
}