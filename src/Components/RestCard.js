import Restaurant from "./Restaurant";

export default function RestCard({restinfo}){
    return(
        <>
        <img className="w-70 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restinfo?.info?.cloudinaryImageId}></img>
        </>
    )
}