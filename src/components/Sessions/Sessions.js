import React from 'react'
import Img_title from "../../assets/images/Group 920.png"
import {data} from './moc'
import CardSession from './Card/CardSession'
import './Sessions.css'
 const Sessions= () => {
    return (
        
        <div className="container back-session" >
        <img src={Img_title} alt="img"/>
        <div>
            
        {
            data.map((item ,id) => 
            <CardSession data={item} key={id}  />
               )
        }
        </div>
        </div>
    )
}

export default Sessions;