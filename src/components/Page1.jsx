import React from "react";
import background from "../image/back.jpg";
import person from "../image/guy.png";
import baack from "../image/back1.jpg";
import person2 from "../image/new1.png";
import "../App.css";
function Page1() {
  return (
    <div className="relative">
      <img
        className=" w-full h-screen object-cover"
        src={baack}
        alt="my image"
      />

      <div className="w-full h-screen absolute top-0 left-0 font-serif ">
        <nav className="flex items-center absolute">
          <div class="no-underline text-red-500 text-3xl font-bold cursor-pointer">
            LOGO
          </div>
          <ul class="flex-1 text-center">
            <li class="list-none inline-block px-5 ml-60">
              <a href="#" class="no-underline text-gray-900 px-2 text-lg">
                Home
              </a>
            </li>
            <li class="list-none inline-block px-5">
              <a href="#" class="no-underline text-gray-900 px-2 text-lg">
                Product
              </a>
            </li>
            <li class="list-none inline-block px-5">
              <a href="#" class="no-underline text-gray-900 px-2 text-lg">
                About
              </a>
            </li>
            <li class="list-none inline-block px-5">
              <a href="#" class="no-underline text-gray-900 px-2 text-lg">
                Contact Us
              </a>
            </li>
            <li class="list-none inline-block px-5">
              <a href="#" class="no-underline text-gray-900 px-2 text-lg">
                Faq
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <div className=" text1">
            <h1 className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              itaque nihil aliquid doloremque molestiae laudantium, qui totam
              beatae veniam eos, eveniet veritatis soluta deleniti perferendis
              nam ut nesciunt dicta distinctio.
            </h1>
            <button className="button1">Button</button>
          </div>
          <div className="img2">
            <img className="img22" src={person2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
