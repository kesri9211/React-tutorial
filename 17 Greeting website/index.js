//#17 challege 3 GREETING WEBSITE color will change according to time
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

let msg;
let currDate=new Date();
currDate=currDate.getHours();
//creating object
const cssStyle={};
if(currDate>=1 && currDate<12){
    msg="Good morning";
    cssStyle.color="Orange";
}
else if(currDate>=12 && currDate<17){
    msg="Good afternoon";
    cssStyle.color="Yellow";
}
    
else if(currDate>=17 && currDate<=20){
    msg="Good evening";
    cssStyle.color="Blue";
}
else{
    msg="Good Night";
    cssStyle.color="Red";

}

ReactDOM.render(
    <>
    <div className="heading">
        <h1>Welcome sir, <span style={cssStyle}>{msg}</span></h1>
        </div>
    </>,
    document.getElementById('root')
);
