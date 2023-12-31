import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

const favs="amazon";
//first letter of function should be capital
const Fseries= ()=> {
    if(favs==="netflix"){
        return <Netflix/>;
    }
    else{
        return <Amazon/>;
    }

};
//fat arrow function
const App=()=>(
    <>
        <h1 className="heading_style">List of top 6 Netflix Shows</h1>
        <Fseries/>
    </>
);
export default App;
