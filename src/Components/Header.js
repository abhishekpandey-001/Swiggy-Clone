//First div: Swiggy logi and other efatures like "Swigggy Corporate", "Partner with us", "Get the app", and "Sign in";

export default function Header(){
    return(
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between mx-16 py-8">
               <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"></img>
               <div className="text-white text-base font-bold flex gap-12 items-center">
                <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                <a className="border border-white py-3 px-4 rounded-2xl" href="https://www.swiggy.com/corporate/">Get the App</a>
                <a className="border border-black py-3 px-4 rounded-2xl bg-black" href="https://www.swiggy.com/corporate/">Sign in</a>
               </div>
            </div>
            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute left-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-110 w-60 absolute right-0 top-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="text-5xl text-white font-bold text-center ml-[15%] mr-[15%]">
                    Order food & groceries. Discover best resturants. Swiggy it!
                </div>
                <div className="max-w-[70%] mx-[26%] mt-[2%] flex gap-5">
                    <input className="bg-white h-15 w-80 rounded-2xl px-7 py-6 text-[15px]" placeholder="Delhi, India"></input>
                    <input className="bg-white h-15 w-110 rounded-2xl px-7 py-6 text-[15px] flex-wrap" placeholder="Search for resturants and items for more"></input>
                </div>
            </div>
            <div className="flex w-[65%] container mx-auto my-0 p-0">
                <img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                <img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                <img className="w-81 h-75" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
            </div>
        </header>
    )
}