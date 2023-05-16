import { FaRegHeart } from "react-icons/fa";
import { BsEvStationFill,BsRecord2Fill,BsFillPeopleFill } from "react-icons/bs";
import {PopularCars} from "./../data/data"

const PopularCar = () => {
    return ( 
        <section className="max-w-[1640px] max-auto px-6 py-4 md:px-16 ">
            {/* title and view all*/}
            <div className="flex justify-between px-5 md:px-10">
                <p className="font-semibold text-sm sm:text-base text-secondary-300">Popular Cars</p>
                <p  className="font-semibold text-sm sm:text-base text-primary-500 cursor-pointer">View All</p>
            </div>

            {/* Card cars */}
            <div className="grid grid-cols-4 gap-4 ">
                {PopularCars.map((item,index)=>(
                    <div key={index} className="p-6 rounded-md bg-white">
                        <div className="flex justify-between">
                            <p className="font-bold text-xl">{item.name}</p>
                            <span><FaRegHeart/></span>
                        </div>
                        <p className="font-bold text-sm text-secondary-300">{item.type}</p>
                        <img src={item.image} alt={item.name} srcset="" className="mt-14 mb-14"/>
                        {/* ----------- */}
                        <div className="flex justify-between items-center gap-3 text-secondary-300">
                            <div className="flex">
                                <BsEvStationFill />
                                <span className="font-medium text-sm ml-1.5">90L</span>
                            </div>
                            <div className="flex items-center">
                                <BsRecord2Fill size={20}/>
                                <span className="font-medium text-sm ml-1.5">Manual</span>
                            </div>
                            <div className="flex">
                                <BsFillPeopleFill />
                                <span className="font-medium text-sm ml-1.5">2 People</span>
                            </div>
                        </div>
                        {/* ---------- */}
                        <div className="flex justify-between items-center mt-6">
                            <p className="font-bold text-base">$99.00/ <span className="text-sm text-secondary-300">day</span></p>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded duration-300'>Ren Now</button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
     );
}
 
export default PopularCar;