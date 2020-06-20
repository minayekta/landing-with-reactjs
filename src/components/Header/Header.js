import React from 'react'
import './Header.scss'
import img from '../../assets/images/Group 365.png';
 const Header = () =>{
    return (
      
        <div className="container-fluid top_menu">
        <div className=" container  ">
            <nav className="nav_list row">
            <div className="col-lg-1  col-md-2 col-sm-1">
                <img className="img " src={img} alt="img" />
            </div>
                    <ul className="group_item col-lg-8 col-md-6 col-sm-6 ">
                        <li className="item" onClick=""> Projects </li>
                        <li className="item"> Partners </li>
                        <li className="item"> FAQ </li>
                        <li className="item"> Masters</li>
                        <li className="item"> Classes </li>
                        <li className="item"> Course Experience </li>
                        <li className="item"> About us </li>
                    </ul>
            <button className="btn_nav col-lg-1  col-md-1 col-sm-1 "> Register </button>

            </nav>

            </div>
        </div>
    )
}

export default Header;