import React from "react";
import { BsSearch, BsPersonAdd } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import pic1 from "../image/head2.jpg";
import "./sales1/page.css";

function Home() {
  return (
    <div className="  font-serif">
      <div className=" bg-gray-950 h-10">
        <p className=" text-sm float-left text-white p-3 pl-24">
          Free Shippings On All Orders Over $1000 | New
        </p>
        <p className=" text-sm float-right text-white p-3 pr-24">
          Today's Deal | Special Deals
        </p>
      </div>
      {/* nav bar */}
      <nav className="clear-both w-full p-4 pb-9  ">
        <div className=" float-left text-4xl font-bold">MuyiTech</div>
        <div>
          <ul className=" list-none overflow-hidden m-0 text-center">
            <li className=" inline-block pl-8 font-medium hover:text-orange-400 cursor-pointer">
              HOME
            </li>
            <li className=" inline-block pl-8 font-medium hover:text-orange-400 cursor-pointer">
              SHOP
            </li>
            <li className=" inline-block pl-8 font-medium hover:text-orange-400 cursor-pointer">
              BLOG
            </li>
            <li className=" inline-block pl-8 font-medium hover:text-orange-400 cursor-pointer">
              MEDIA
            </li>
            <li className=" inline-block pl-8 font-medium hover:text-orange-400 cursor-pointer">
              SHORTCODE
            </li>
            <li className=" inline-block pl-8 font-medium hover:text-orange-400 cursor-pointer">
              FEASURE <span className=" text-yellow-500 ml-10">|</span>
            </li>

            <li className="absolute top-[60px] right-[60px] flex">
              <BsSearch className=" mr-4 text-xl cursor-pointer" />
              <BsPersonAdd className=" mr-4 text-xl cursor-pointer " />
              <AiOutlineShoppingCart className=" mr-4 text-xl cursor-pointer" />
            </li>
          </ul>
        </div>
      </nav>
      {/* end of nav */}
      {/* banner */}
      <section className=" clear-both relative h-[79vh]">
        <img
          className=" w-full h-[79vh] "
          src={pic1}
          alt="my image"

          // h-[77vh] w-full object-cover bg-center bg-cover bg-no-repeat
        />
        <div className="w-full absolute top-0 left-0  font-serif">
          <div className="h-[79vh] float-right pr-[14rem] pt-24 ">
            <h3 className=" text-yellow-600 pb-4 text-2xl">Special Discount</h3>
            <p className=" text-white font-thin text-4xl pb-2">
              Latest Headset System
            </p>
            <p className="text-white font-bold text-4xl pb-8">Offer 20% Off</p>
            <button
              type="button"
              class="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900"
            >
              Order Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

{
  /* <section className=" clear-both relative">
<img
  className=" w-full h-[77vh] "
  src={pic1}
  alt="my image" */
}

// h-[77vh] w-full object-cover bg-center bg-cover bg-no-repeat
// />
// <div>
//   <div className="w-full h-screen absolute top-0 left-0 font-semibold font-serif">
//     <h3 className=" absolute text-yellow-600">Special discount</h3>
//   </div>
// </div>
// </section>
// </div>
