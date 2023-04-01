import { FaSistrix,FaSlidersH } from "react-icons/fa";


const NavBar = () => {
    return ( 
        <nav className="max-w-[1640px] max-auto grid grid-cols-2 px-8 py-6 md:px-16 md:py-10">
            {/* logo */}
            <div className="font-bold text-2xl md:text-4xl text-sky-500 ">
                <p>MOR<span className="text-sky-800">ENT</span></p>
            </div>

            {/* Profile and Notification */}
            <div className="flex justify-end">
                {/* Notification div */}

                {/* Profile div */}
                <div className="">
                    <img className="md:w-10 md:h-10" src={require("../image/Imageprofile.png")} alt="profile"/>
                </div>
            </div>

            {/* Search bar */}
            <div className="col-span-2 py-8 flex justify-center items-center">
                <div className="flex justify-between items-center w-123 h-12 border border-gray-300 rounded-full">
                    <FaSistrix size={25} className="ml-4 mr-2 text-gray-400 cursor-pointer duration-200 hover:text-black/80"/>
                    <input className="focus:outline-none text-gray-400 w-full p-2" type="text" placeholder="Search something here" />
                    <FaSlidersH size={25} className="mr-4 text-gray-400 cursor-pointer duration-200 hover:text-black/80"/>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;