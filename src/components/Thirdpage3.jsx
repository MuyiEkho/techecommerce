import React from "react";
import pic1 from "../image/head2.jpg";
import "./sales1/page.css";
import sale1 from "../image/watch.jpg";
import sale2 from "../image/watch2.jpg";
import sale3 from "../image/watch3.jpg";
import sale4 from "../image/watch4.jpg";
import sale5 from "../image/watch5.jpg";
import sale6 from "../image/watch6.jpg";
import sale7 from "../image/watch7.jpg";
import long from "../image/longimg.jpg";
import longg1 from "../image/long1.jpg";
import longg2 from "../image/long2.jpg";

function Thirdpage3() {
  return (
    <div className=" flex items-center justify-center font-serif">
      <div className=" relative grid grid-cols-4 gap-4 w-[1000px] h-auto box-border mb-10  ">
        <img
          src={longg1}
          alt=""
          className="  h-[390px] max-w-[100%] rounded-lg object-cover row-span-2 "
        />
        <div className="absolute mt-[19rem] ml-[3rem]">
          <h1 className="  text-white font-bold text-sm">Sale Up To 30% Off</h1>
          <p className=" text-white ml-[-1rem] font-light">
            Lastest Quality Laptops
          </p>
          <p className="text-orange-400 text-center underline">View more</p>
        </div>
        <img
          src={sale1}
          alt=""
          className=" object-cover bg-center rounded-lg bg-cover col-span-2 h-[200px] w-[2000px] "
        />
        <div className="absolute ml-[28rem] mt-[7rem]">
          <h1 className="  text-white font-bold text-lg">20% Off</h1>
          <p className=" text-white  font-light font-sans">Smart Watch</p>
          <p className="text-orange-400 underline text-sm">View more</p>
        </div>
        <img
          src={sale4}
          alt=""
          className=" object-cover rounded-lg h-[200px] w-[2000px] "
        />
        <div className="absolute ml-[20.5rem] mt-[22.5rem]">
          <h1 className="  text-white text-sm">Smart Phone</h1>
        </div>
        <img src={sale5} alt="" className=" h-full  rounded-lg object-cover" />
        <div className="absolute ml-[52rem] mt-[10rem]">
          <h1 className="  text-white font-medium text-[15px]">Powerbanks</h1>
        </div>

        <img
          src={sale3}
          alt=""
          className="object-cover col-span-2 rounded-lg h-[170px] w-[2900px]"
        />
        <div className="absolute ml-[48rem] mt-[16rem]">
          <h1 className="  text-white font-bold text-lg">15% Off</h1>
          <p className=" text-white  font-light font-sans">Headsets</p>
          <p className="text-orange-400 underline text-sm">View more</p>
        </div>
      </div>
    </div>
  );
}

export default Thirdpage3;
