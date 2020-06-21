import React from "react";
import img2 from "../../assets/images/kia ux course.png";
import "./ProductDesign.css";
const ProductDesign = () => {
  return (
    <div className="container">
      <div className="row flex">
        <div className="col-xl-8 col-lg-8 col-md-12 sm-12 left_item">
          <h1 className="h1_product"> Product Design Course</h1>
          <p className="h_product"> Product Factory</p>
          <p className="content_product">
            Learn how design thinking, user research, business vision and
            marketing, and finally designing and creating real digital products
            for real users.
          </p>
          <button className="btn_product"> Start Register</button>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 sm-12  right_item">
          <img className="img_product" alt="img" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
