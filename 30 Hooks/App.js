import React, { useState } from "react";

/*
1
Hooks are the new feature introduced in the React 16.8 version.
2
It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components.
3
It does not work inside classes.
4
Hooks should always be used at the top level of the React functions.
5
Node version 6 or above. NPM version 5.2 or above


useState is an array that return an array with two items(current data,updated data)=initail data
useState is hook in react
useState is used to change state of an object
*/
const App=()=>{
    const state=useState();
    //array distructuring
    const [count,setcount]=useState(0);

    const Inc=()=>{
         setcount(count+1);
         console.log("clicked");
         };
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Inc}>Click me</button>
        </>
    );
}
export default App;
