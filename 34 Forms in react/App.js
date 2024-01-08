//#34 forms in reactjs  
import React, { useState } from "react";

/*
In React we have Controlled and Uncontrolled Component
In a controlled component, form data is handled by a React component.
The alternative is uncontrolled components, where form data is handled by the DOM itself.
onChange is event always used with input tag 
hooks- useState 

*/
 const App=()=>{
    let a;
    //array destructuring-> change state 
    const[name,Nname]=useState("");
    //onChange event pass object which contain value enter at input field
    //controlled component  -- store value enter in input-field to 'a'
    const inputEvent=(event)=>{
        a=event.target.value
    }
    //display value when button is clicked
    const displayEvent=()=>{
        Nname(a)
    }
    return(
        <>
        <div>
            <h1>Hello {name}</h1>
            <input type="text" placeholder="enter your name" onChange={inputEvent}/>
            <button onClick={displayEvent}>Click 🧈</button>
        </div>
        </>
    );
 }
 export default App
