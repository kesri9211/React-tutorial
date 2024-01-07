//#33 Handling events in reactjs  
import React, { useState } from "react";

/*useState is an array that return an array with two items(current data,updated data)=intial data
useState is hook in react
useState is used to change state of an object
internal css { {} } 
*/
let Curcolor="#0faa62";
let Curname="Hello baby"
const App=()=>{
    //array destructuring
    const [color,newcolor]=useState(Curcolor);
    const [name,newname]=useState(Curname);
    const bgColor=()=>{
        //console.log("clicked")
        Curcolor="#0fa5aa"
        newcolor(Curcolor)
        newname("ouch, what are you doing 😒")
    }
    const again=()=>{
        newname("aaan dont pull my cheeks 🫨")
        newcolor("#c7a3f7")
    }
    return(
        <>
        <div style={ {backgroundColor:color} }>
            <button onClick={bgColor} onDoubleClick={again}> {name} </button>
        </div>
        </>
    );
}
export default App;
