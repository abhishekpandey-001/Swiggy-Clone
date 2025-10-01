import { useSelector } from "react-redux"

export default function Checkout(){

    const items = useSelector(state=>state?.cartSlice?.items)
    return(
        <div>
            {
                items?.map(value=><div className="text-5xl" key={value?.id}>{value?.name}</div>)
            }
        </div>
    )
}