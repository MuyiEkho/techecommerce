import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

function Secound2() {
  return (
    <div className=" clear-both flex justify-evenly p-11">
      {/* wrapper */}

      <div className=" ">
        <CiDeliveryTruck className=" float-left text-3xl mt-2 mr-4" />
        <p className=" uppercase font-extrabold font-serif text-xs inline">
          Free Shipping worldwide
        </p>
        <p className=" text-xs text-gray-600"> Lorem ipsum dolor sit amet</p>
      </div>

      <div>
        <TfiHeadphoneAlt className=" float-left text-2xl mt-2 mr-4" />
        <p className=" uppercase font-extrabold font-serif text-xs inline">
          Free Shipping worldwide
        </p>
        <p className=" text-xs text-gray-600"> Lorem ipsum dolor sit amet</p>
      </div>

      <div>
        <RiMoneyDollarCircleLine className=" float-left text-2xl mt-2 mr-4" />
        <p className=" uppercase font-extrabold font-serif text-xs inline">
          Free Shipping worldwide
        </p>
        <p className=" text-xs text-gray-600"> Lorem ipsum dolor sit amet</p>
      </div>
      {/* wrapper */}
    </div>
  );
}

export default Secound2;
