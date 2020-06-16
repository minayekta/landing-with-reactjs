import React from 'react'
import './Header.scss'
import img from '../../assets/images/Group 365.png';
 const Header = () =>{
    return (
      
        <div className="container-fluid top_menu">
        <div className=" container  ">
            <nav className="nav_list">
            <div>
                <img className="img" src={img} alt="img" />
            </div>
                    <ul className="group_item">
                        <li className="item" onClick=""> Projects </li>
                        <li className="item"> Partners </li>
                        <li className="item"> FAQ </li>
                        <li className="item"> Masters</li>
                        <li className="item"> Classes </li>
                        <li className="item"> Course Experience </li>
                        <li className="item"> About us </li>
                    </ul>
                    <div>
                    </div>
            <button className="btn_nav"> Register </button>

            </nav>

            </div>
        </div>
    )
}

export default Header;