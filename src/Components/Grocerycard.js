

export default function Grocerycard({foodData}){
    return(
        <div className="flex flex-col w-40 text-center">
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}></img>
        </a>
        <h2 className="text-[#02060CBF] font-bold text-[20px]">{foodData?.action?.text}</h2>
        </div>
    )
}