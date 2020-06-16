import React from 'react'
import './ReqListHeading.scss';
import image1 from "../../assets/images/Union 3.png";
import image2 from "../../assets/images/Union 4.png";
import IMG_tick from '../../assets/images/tick.png'
 const ReqListHeading = () => {
    return (
        <div className="container-fluid container_req  ">
            <div className="Req_list" >
                <h1 className="title"> Request a list of headings </h1>
                <p className="description">
                    Please enter your email address to receive course titles, the topics will be emailed to you. 
                </p>
                <input className="input-req" placeholder="AfshinT2Y@gmail.com" /> 
                <p className="p_icon"> <img className="IMG_tick" src={IMG_tick} alt="title" /> Your email has been successfully registered, headlines will be sent to you soon.</p>           
            </div>
            <div className="div_img">
                <img className="img1" src={image1} alt="img"  />
                <img className="img2" src={image2} alt="img2" />
            </div>
        </div>
    )
}

export default ReqListHeading;