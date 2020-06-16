import React from 'react'
import './Footer.css'
import IMG_product from '../../assets/images/Group 368.png'
import IMG_social_facebook from '../../assets/images/facebook-square-brands.png'
import IMG_social_twitter from '../../assets/images/twitter-brands.png'
import IMG_social_instagram from '../../assets/images/instagram-brands(1).png'
 const Footer = () => {
    return (
        <div className="container-fluid footer-holder">
           <div className="flex-item">
            <span className="social "><img src={IMG_social_facebook} alt="img" /></span>
            <span className="social"> <img src={IMG_social_twitter} alt="img" /></span>
            <span className="social"> <img src={IMG_social_instagram} alt="img" /></span>
           </div>
           <div className="flex-item img-product">
             <img src={IMG_product} alt="img" />
           </div>
           <div className="flex-item">
           Contact Number: 0912-1234567
           </div>
        </div>
    )
}

export default Footer;