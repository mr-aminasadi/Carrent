import { useEffect } from "react";

import { BiSort } from "react-icons/bi";
import { white } from "tailwindcss/colors";

import AOS from "aos";
import "aos/dist/aos.css";

// class repeat
const selectClass =
  "w-20 md:w-28 bg-transparent border-transparent focus:ring-0 focus:border-none text-gray-500 text-sm rounded-lg p-0";
const labelClass = "block my-2 text-sm md:text-base font-bold text-gray-900";

const FilterCars = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="max-w-[1640px] max-auto px-6 py-4 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-2">
      {/* Pick - Up */}
      <div
        className="bg-white rounded-md px-2 py-2 md:px-7 md:py-5"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex items-center">
          <input
            id="helper-radio"
            aria-describedby="helper-radio-text"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
          />
          <span className="font-semibold text-base ml-2">Pick - Up</span>
        </div>
        {/* selection */}
        <div className="flex mt-4">
          <div className="border-r-2 border-gray-200">
            <label for="location" class={labelClass}>
              Locations
            </label>
            <select id="location" class={selectClass}>
              <option selected>City</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="border-r-2 border-gray-200 ml-2 md:ml-4">
            <label for="date" class={labelClass}>
              Date
            </label>
            <select id="date" class={selectClass}>
              <option selected>Date</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="ml-2 md:ml-4">
            <label for="time" class={labelClass}>
              Time
            </label>
            <select id="time" class={selectClass}>
              <option selected>Time</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>

      {/* Change button */}
      <button
        data-aos="fade-up"
        data-aos-duration="3000"
        className="bg-sky-600 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-lg"
      >
        <BiSort size={35} color={white} />
      </button>

      {/* Drop - Off */}
      <div
        className="bg-white rounded-md px-4 py-4 md:px-7 md:py-5"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div className="flex items-center">
          <input
            id="helper-radio"
            aria-describedby="helper-radio-text"
            type="radio"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
          />
          <span className="font-semibold text-base ml-2">Drop - Off</span>
        </div>
        {/* selection */}
        <div className="flex mt-4">
          <div className="border-r-2 border-gray-200">
            <label for="location" class={labelClass}>
              Locations
            </label>
            <select id="location" class={selectClass}>
              <option selected>City</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="border-r-2 border-gray-200 ml-2 md:ml-4">
            <label for="date" class={labelClass}>
              Date
            </label>
            <select id="date" class={selectClass}>
              <option selected>Date</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="ml-2 md:ml-4">
            <label for="time" class={labelClass}>
              Time
            </label>
            <select id="time" class={selectClass}>
              <option selected>Time</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterCars;
