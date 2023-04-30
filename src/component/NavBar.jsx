import { FaSistrix, FaSlidersH, FaBell, FaHeart, FaCog } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="max-w-[1640px] max-auto grid grid-cols-2 md:grid-cols-3 px-8 py-3.5 md:px-16 md:py-5 bg-white shadow-sm">
      {/* logo */}
      <div className="md:order-1 font-bold text-2xl md:text-4xl text-sky-500 ">
        <p>
          MOR<span className="text-sky-800">ENT</span>
        </p>
      </div>

      {/* Profile and Notification */}
      <div className="md:order-3 flex justify-end gap-2 md:gap-4">
        {/* Notification div */}
        <div className="flex justify-center items-center gap-1 text-gray-500">
          <FaHeart size={14} className="box-content border p-2 rounded-full" />
          <div className="relative">
            <FaBell size={14} className="box-content border p-2 rounded-full"/>
            <span className="absolute top-0.5 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </div>
          <FaCog size={14} className="box-content border p-2 rounded-full"/>
        </div>
        {/* Profile div */}
        <div className="">
          <img
            className="md:w-10 md:h-10"
            src={require("../image/Imageprofile.png")}
            alt="profile"
          />
        </div>
      </div>

      {/* Search bar */}
      <div className="col-span-2 md:col-span-1 md:order-2  py-4 md:py-0 flex justify-center items-center">
        <div className="flex justify-between items-center w-123 md:w-96 h-12 border border-gray-300 rounded-md md:rounded-full">
          <FaSistrix
            size={25}
            className="ml-4 mr-2 text-gray-400 cursor-pointer duration-200 hover:text-black/80"
          />
          <input
            className="border-none focus:ring-0 focus:outline-none text-gray-400 w-full p-2"
            type="text"
            placeholder="Search something here"
          />
          <FaSlidersH
            size={25}
            className="mr-4 text-gray-400 cursor-pointer duration-200 hover:text-black/80"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
