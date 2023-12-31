//#24 Array Map & Fat Arrow function
/*
functional programing -fun ke andar fun sData.map(nCard)
call back function
*/
import React from "react";
import ReactDOM from "react-dom";
//create a component of card->use component as HTML-tag and props is for attribute of that component
import Card from "./Card";
import "./index.css";
import sData from "./sData";
//create map function ncard
function nCard(val){
    return(
    <Card 
            key={val.id}
            imgsrc={val.imgsrc} 
            title={val.title} 
            catagory={val.catagory} 
            sLink={val.sLink}
            />
    );
}

ReactDOM.render(
    <>
        <h1 className="heading_style">List of top 6 Netflix Shows</h1>
{/* map */}
        {sData.map(nCard)}
        
    </>,
    document.getElementById('root')
);
