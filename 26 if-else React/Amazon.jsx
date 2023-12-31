import React from "react";
import Card from "./Card";
import sData from "./sData";

const Amazon=()=>{
    return(
        <Card
            key={sData[4].id} 
            imgsrc={sData[4].imgsrc} 
            title={sData[4].title} 
            catagory={sData[4].catagory} 
            sLink={sData[4].sLink}
            />
    );
}
export default Amazon;
