import React from 'react'
import './CouresFee.css'
import IMG from '../../assets/images/Group 901.png'
import IMG_hedear from '../../assets/images/Group 851.png'
 const CourseFee= () => {
    return (
        <div className="row ">
            <div className="container holder  ">
            <img className="IMG_course" src={IMG_hedear} alt="title" />
            <div className="row ">
                <div className ="col ">
                    <h4> What will be our achievements by participating in this course?</h4>
                    <p className="course-q"> Learn the requirements of a product designer from experienced professionals in the field. </p>
                    <p className="course-q"> Experience in-team work and product designer interactions within the real product team. </p>
                    <p className="course-q"> Experience working on projects with information and feature lists and real user recognition. </p>
                    <p className="course-q"> Possibility to take Adobe exams upon completion of course and upon registration.</p>
                </div>
                <div className ="col" >
                    <img className="img-price" src={IMG} alt="price"/>
                </div>
            </div>
            <p className =""> Possibility of refund prior to the third session if the course quality is not satisfied.</p>
        </div>
        </div>
    )
}

export default CourseFee;