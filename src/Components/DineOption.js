import { dineoutRestaurants } from "../Utils/DinData";
import DineCard from "./DineCard";

export default function DineOption() {
  return (
    <>
      <p className="text-black font-bold text-2xl mt-10 ml-40">
        Discover best restaurants on Dineout
      </p>
      <div className="w-[80%] container mx-auto overflow-x-auto mb-20">
        <div className="flex flex-nowrap gap-3 mt-10">
          <div className="grid grid-rows-1 auto-cols-max grid-flow-col gap-6">
            {dineoutRestaurants.map((DineData) => (
              <DineCard key={DineData?.info?.id} DineData={DineData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// {
//     dineoutRestaurants.map((DineData)=><DineCard key={DineData?.info?.id} DineData={DineData}></DineCard>)
// }
