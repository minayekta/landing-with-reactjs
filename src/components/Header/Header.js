import React from "react";
import "./Header.scss";
// import { NavLink, Link } from "react-router-dom"
import img from "../../assets/images/Group 365.png";
// import HamburgerMenu from "react-hamburger-menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <div className="container-fluid top_menu">
        <div className=" container  ">
          <nav className="nav_list ">
            <div className="">
              <img className="img " src={img} alt="img" />
            </div>
           
            <div className="hambergeropen">
            <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
              <li className="item" onClick="">
                Projects
              </li>
              <li className="item"> Partners </li>
              <li className="item"> FAQ </li>
              <li className="item"> Masters</li>
              <li className="item"> Classes </li>
              <li className="item">  Experience </li>
              <li className="item"> About us </li>
              
            </ul>
            </div>
            <button className="btn_nav"> Register </button>
 <div className="hambergerholder">
            <div
            onClick={(e) => this.handleToggle(e)}
            className="span-holder">
            <span className="line-hamberger"></span>
            <span className="line-hamberger1"></span>
            <span className="line-hamberger2"></span>
            </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default Header;

// <div className="container-fluid top_menu">
//         <div className=" container  ">
//             <nav className="nav_list row">
//             <div className="col-lg-1  col-md-2 col-sm-1">
//                 <img className="img " src={img} alt="img" />
//             </div>
// <i
// className="fa-bars"
// aria-hidden="true"
// onClick={(e) => this.handleToggle(e)}
// />
//                     <ul className="group_item col-lg-8 col-md-6 col-sm-6 ">
//                         <li className="item" onClick=""> Projects </li>
//                         <li className="item"> Partners </li>
//                         <li className="item"> FAQ </li>
//                         <li className="item"> Masters</li>
//                         <li className="item"> Classes </li>
//                         <li className="item"> Course Experience </li>
//                         <li className="item"> About us </li>
//                     </ul>
//             <button className="btn_nav col-lg-1  col-md-1 col-sm-1 "> Register </button>

//             </nav>

//             </div>
//         </div>

//   <div className="container-fluid top_menu">
//     <div className=" container  ">
//       <nav className="nav_list ">
//         <div className="">
//           <img className="img " src={img} alt="img" />
//         </div>
//         <i
//           className="fa-bars"
//           aria-hidden="true"
//           onClick={(e) => this.handleToggle(e)}
//         />
//         <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
//           <li className="item" onClick="">
//             {" "}
//             Projects{" "}
//           </li>
//           <li className="item"> Partners </li>
//           <li className="item"> FAQ </li>
//           <li className="item"> Masters</li>
//           <li className="item"> Classes </li>
//           <li className="item"> Course Experience </li>
//           <li className="item"> About us </li>
//           <button className="btn_nav"> Register </button>
//         </ul>
//       </nav>
//     </div>
//   </div>
// );

//     <div className="hamburgerHolder">
//     <HamburgerMenu
//         isOpen={this.state.open}
//         menuClicked=""
//         width={40}
//         height={25}
//         strokeWidth={3}
//         rotate={0}
//         color="withe"
//         borderRadius={0}
//         animationDuration={0.5}
//     />
// </div>
// );
