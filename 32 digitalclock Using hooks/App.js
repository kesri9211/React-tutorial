//#32 hooks in react challenge 2 digital clock
import React, { useState } from "react";

/*useState is an array that return an array with two items(current data,updated data)=initail data
useState is hook in react
useState is used to change state of an object
*/

let currTime=new Date().toLocaleTimeString();
const App=()=>{
    //array destructuring
    const[time,newtime]=useState(currTime)

    const Refresh=()=>{
        currTime=new Date().toLocaleTimeString();
        newtime(currTime)
    }
    //call back funtion
    setInterval(Refresh,1000)
    return(
        <>
            <h1>{time}</h1>
        </>
    );
}
export default App;
