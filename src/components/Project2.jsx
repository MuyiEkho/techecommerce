// import React from "react";
// import "../App.css";
// import logoo from "../image/logo1.png";

// function Project2() {
//   return (
//     <div>
//       <nav className="nav1">
//         <form action="">
//           <img className="imgg" src={logoo} alt="" />
//           <input className="input1" type="text" placeholder="Search" />
//           <input className="input2" type="submit" placeholder="buy" />
//         </form>

//         <div class="social-icons">
//           <a href="">
//             <i class="fa-brands fa-twitter"></i>
//           </a>
//           <a href="">
//             <i class="fa-brands fa-facebook"></i>
//           </a>
//           <a href="">
//             <i id="insta" class="fa-brands fa-instagram"></i>
//           </a>
//           <a href="">
//             <i id="git" class="fa-brands fa-github"></i>
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Project2;

import React from "react";
import "../App.css";
import logoo from "../image/logo1.png";
//

function Project2() {
  return (
    <div>
      <nav>
        <div className="logo">Logo</div>
        <div class="menu">
          <ul>
            <li>
              <input className="in" type="search" placeholder="Search here" />
            </li>
            <li>
              <button className="b1">Button</button>
            </li>
          </ul>
        </div>
      </nav>
      {/* 
        <nav className="nnn">
          <div className="logo">Logo</div>
          <div className="search_box">
            <input className="" type="search" placeholder="Search here" />
            <span>
              <FaBeer />
            </span>
          </div>
          <button className="b1">Button</button>
        </nav> */}
    </div>
  );
}

export default Project2;

<nav>
  <div className="logo">Logo</div>
  <div class="menu">
    <ul>
      <li>
        {" "}
        <input className="" type="search" placeholder="Search here" />
      </li>
      <li>
        {" "}
        <button className="b1">Button</button>
      </li>
    </ul>
  </div>
</nav>;
