import React from 'react'
import './HeaderSession.css'
import IMG from './image'
 const HeaderSession = () => {
    return (
        <div className="header">
            <p className="num-session"> First session </p>
            <div className="holder-x"> 
                <img className="IMG" src={IMG.IMG1} alt="img"/>
                <p className="Title"> Duration: 6 hour </p>
            </div>
            <div className="holder-x" > 
                <img className="IMG" src={IMG.IMG2}  alt="img"/>
                <p className="Title" > Date: November 5</p>
            </div>
            <div className="holder-x"> 
                <img className="IMG" src={IMG.IMG3}  alt="img"/>
                <p className="Title"> View video </p>
            </div>
        </div>
    )
}

export default HeaderSession;