import React from "react";

function Fourthpage4() {
  return (
    <div className="  font-serif ">
      {/* h-screen w-full */}
      <div className=" ">
        <p className=" text-3xl font-extrabold float-left text-black p pl-24">
          Top Products
        </p>

        <div className=" float-right ">
          <ul className="">
            <li className=" pt-5 pb-5 pl-6 inline-block text-xs font-semibold text-black">
              LATEST
            </li>
            <li className=" pl-6 inline-block text-xs font-semibold text-black">
              BEST SELLER
            </li>
            <li className=" px-6 inline-block text-xs font-semibold text-black">
              FEASURED
            </li>
          </ul>
        </div>
      </div>
      <div className=" clear-both border-b-2 border-gray-60 "></div>
    </div>
  );
}

export default Fourthpage4;
