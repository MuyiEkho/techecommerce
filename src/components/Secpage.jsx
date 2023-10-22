import React from "react";
import { FaBeer, FaChrome, FaCloudsmith, FaDyalog } from "react-icons/fa";

function Page2() {
  return (
    <div>
      <h1 className="pro">Featured product</h1>

      <div className="product flex justify-evenly mt-20 ">
        <h3>
          <FaBeer className=" rounded-full shadow-md shadow-gray-900   bg-lime-400 h-20 w-20 p-7" />{" "}
          Lorem ipsum
        </h3>
        <h3>
          <FaChrome className=" rounded-full shadow-md shadow-gray-900   bg-lime-400 h-20 w-20 p-7" />{" "}
          Lorem ipsum
        </h3>
        <h3>
          <FaCloudsmith className=" rounded-full shadow-md shadow-gray-900   bg-lime-400 h-20 w-20 p-7" />{" "}
          Lorem ipsum
        </h3>
        <h3>
          <FaDyalog className=" rounded-full shadow-md shadow-gray-900   bg-lime-400 h-20 w-20 p-7" />{" "}
          Lorem ipsum
        </h3>
      </div>
    </div>
  );
}

export default Page2;
