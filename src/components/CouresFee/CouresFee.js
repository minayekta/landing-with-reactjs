import React from 'react'
import './CouresFee.css'
import IMG from '../../assets/images/Group 901.png'
import IMG_hedear from '../../assets/images/Group 851.png'
import IMG_tick from  '../../assets/images/tick.png'
 const CourseFee= () => {
    return (
        
            <div className="container holder  ">
            <img className=" IMG_course" src={IMG_hedear} alt="title" />
            <div className="row">
                <div className ="col-xl-6 col-md-10 col-lg-6  col-sm-6 p-holder ">
                    <h4 className="title-coursefee"> What will be our achievements by participating in this course?</h4>
                    <p className="course-q">
                    <img className="IMG_tick" src={IMG_tick} alt="title" />
                     Learn the requirements of a product designer from experienced professionals in the field. 
                     </p>
                    <p className="course-q">
                    <img className="IMG_tick" src={IMG_tick} alt="title" />
                    Experience in-team work and product designer interactions within the real product team. 
                    
                     </p>
                    <p className="course-q">
                    <img className="IMG_tick" src={IMG_tick} alt="title" />
                     Experience working on projects with information and feature lists and real user recognition. </p>
                    <p className="course-q">
                    <img className="IMG_tick" src={IMG_tick} alt="title" />
                    Possibility to take Adobe exams upon completion of course and upon registration.</p>
                </div>
                <div className ="col-xl-4 col-md-2 col-lg-4 col-sm-6" >
                    <img className="img-price" src={IMG} alt="price"/>
                </div>
                </div>

            <div className ="p-holder-bottom ">
            <h1 className="line-bottom"></h1>
            <p className ="p-bottom"> Possibility of refund prior to the third session if the course quality is not satisfied.</p>
            </div>
        </div>
        )
}

export default CourseFee;