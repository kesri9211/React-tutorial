//#22 props in react
//#23 created array of object (sData.jsx) and directly passing index 
/*
:props(which stands for properties)
:props are like funtion arguments in js and attributes in HTML
*/

import React from "react";
import ReactDOM from "react-dom";
//create a component of card->use component as HTML-tag and props is for attribute of that component
import Card from "./Card";
import "./index.css";
import sData from "./sData";
ReactDOM.render(
    <>
        <h1 className="heading_style">List of top 5 Netflix Series</h1>

        <Card 
            imgsrc={sData[0].imgsrc} 
            title={sData[0].title} 
            catagory={sData[0].catagory} 
            sLink={sData[0].sLink}/>
        <Card
            imgsrc={sData[1].imgsrc} 
            title={sData[1].title} 
            catagory={sData[1].catagory} 
            sLink={sData[1].sLink}/>
        <Card
            imgsrc={sData[2].imgsrc} 
            title={sData[2].title} 
            catagory={sData[2].catagory} 
            sLink={sData[2].sLink}/>
        <Card
            imgsrc={sData[3].imgsrc} 
            title={sData[3].title} 
            catagory={sData[3].catagory} 
            sLink={sData[3].sLink}/>
    </>,
    document.getElementById('root')
);
