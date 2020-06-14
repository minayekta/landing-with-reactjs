import React from 'react'
import img from "../../assets/images/Group 468.png"
import Img from "../../assets/images/Group 910.png"
import "../CourseExp/CourseExperience.css" 
 const CourseExperience = () => {
    return (
        <div className="inner_container">
        <div className="back">
            <img className="Img_title" src={Img}/>
            <div className="box_item">
                <p className="item_btn_1"> After attending the course</p>
                <p className="item_btn_2"> During the period</p>
                <p className="item_btn_3"> Before attending the course</p>
            </div>
            <div className="exp_content">
                <img className="img_course" src={img}/>
                <p className="content_course">
                This course has been attempted by zero people who are eager to learn product design, especially user experience and user interface, so it is not a prerequisite, but due to the limited capacity of the priority course with early enrolled people, others can participate in future courses. .
                 Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy, 
                </p>
            </div>
            </div>
        </div>
    )
}

export default CourseExperience;