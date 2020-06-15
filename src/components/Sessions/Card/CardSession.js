import React from 'react'
import HeaderSession from '../HeaderSession/HeaderSession'
import MainSession from '../mainSession/mainSession'
import {data} from '../moc'
import './CardSession.css'
 const CardSession = ({data}) => {
    return (
        <div className="card-session">
            <HeaderSession />
            <MainSession data={data}/>
        </div>
    )
}

export default CardSession