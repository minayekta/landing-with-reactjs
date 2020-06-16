import React from 'react'
import './AskedQ.css'
import IMG from "../..//assets/images/Group 924.png"
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

 const AskedQ = () => {
    

    return (
        <div className="container Ask-holder">
        <div>
            <img className="img_ask" src={IMG} alt="img-ask"/>
           
        </div>  
    
            <p className="Question"> Does this course need any special requirements? <span> </span></p>
            <p className="Question"> Who are the audiences of the product design period of the product factory? <span> </span></p>
            <p className="Question"> Is it possible to pay by installments?<span> </span></p>
            <p className="Question"> Can I start an internship after I finish the course? <span> </span></p>
            <p className="Question"> What should I do after I finish the course? <span> </span></p>
        </div>
    )
}

export default AskedQ;