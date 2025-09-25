import { GroceryGridCards } from "../Utils/Grocery";
import Grocerycard from "./Grocerycard";

export default function GroceryOption() {
  return (
    <>
      <p className="text-black font-bold text-2xl mt-10 ml-40">
        Shop groceries on Instamart
      </p>
      <div className="w-[80%] container mx-auto overflow-x-auto">
        <div className="flex flex-nowrap gap-3 mt-10">
          <div className="grid grid-rows-1 auto-cols-max grid-flow-col gap-5">
            {GroceryGridCards.map((foodData) => (
              <Grocerycard key={foodData.id} foodData={foodData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
