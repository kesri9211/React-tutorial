//#36 forms in reactjs  
import React, { useState } from "react";

/*
form tag is use
on clicking submit button page will not refresh
hooks- useState 

*/
 const App=()=>{
    let vname
    let value
    //array destructuring-> change state 
    //useState also take object as an arguement
    const[name,Nname]=useState(
        
        {Fname:"",  Lname:""}
    );
    
    //onChange event pass object which contain value enter at input field
    //controlled component  -- store value enter in input-field to 'a'
    const inputEvent=(event)=>{
        console.log(event.target.value)
        console.log(event.target.name)

         value=event.target.value;
         vname=event.target.name;
         
    }
    
    //display value when button is clicked
    //call back function inside Nname(()=>{})
    const onsubmits=(event)=>{
        Nname((preValue)=>{
            if(vname === "Fname"){
                return{
                    Fname: value,
                    Lname: preValue.Lname
                };
            }
            else{
                return{
                        Fname: preValue.Fname,
                        Lname: value
                    };
            }
        })
        event.preventDefault();
        alert("form submitted")
    }
    return(
        <>
        <div>
        <form onSubmit={onsubmits}>
            <div>
                <h1>Hello {name.Fname} {name.Lname}</h1>
                <input type="text" placeholder="enter your name" name="Fname" onChange={inputEvent}  />
                <input type="text" placeholder="enter your name" name="Lname" onChange={inputEvent}/>
                <button type="submit">Click 🧈</button>
            </div>
        </form>
        </div>
        </>
    );
 }
 export default App
