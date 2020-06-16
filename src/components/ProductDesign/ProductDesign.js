import React from 'react'
import img2 from "../../assets/images/kia ux course.png"
import "./ProductDesign.css"
 const ProductDesign = () => {
    return (
        <div className="container ">
        <div className="flex">
            <div className="left_item">
                <h1 className="h1_product">Product Design Course </h1>
                
                <p className="h_product"> Product Factory </p>
                <p className="content_product">
                    Learn how design thinking, user research,
                    business vision and marketing, and finally designing
                    and creating real digital products for real users.  
                </p>
                <button className="btn_product"> Start Register </button>            
            </div>
            <div className="right_item">
                <img  className="img_product" src={img2}/>
            </div>
        </div>
        </div>
    )
}

export default ProductDesign;