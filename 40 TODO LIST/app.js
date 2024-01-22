import React, { useState } from "react";
import ListItems from "./ListItems";
/*
map function can only be used with array


*/
const App=()=>{
   const[inputList,setInput]=useState("");
   const[Items,setItems]=useState([]); //array


   const inputEvent=(event)=>{
       // a=event.target.value;
       setInput(event.target.value);
   }
   const deleteItems=(id)=>{
       console.log("del");
       setItems ((oldItems) => {
           return oldItems.filter((arrElem, index) => {
               return index !== id;     //if index is same del
           });
       });
   }
   const clickEvent=()=>{
       //setInput(a)
       //olditems is accessing array
       //return statement holds existing array and adding new data to array
       setItems((olditems)=>{
           return [...olditems,inputList]
       });
       setInput("")
   };
   return(
       <>
           <div className="main_div">
               <div className="center_div">
                   <br/>
                   <h1>TODO List</h1>
                   <br/>
                   <input type="text" onChange={inputEvent} value={inputList}/>
                   <button onClick={clickEvent}>+</button>


                   <ol>
                       {/* <li>{inputList}</li> */}
                       {/* map function can only be used with array ,pass key to get index number*/}
                       {Items.map ((itemval,index) => {
                          return <ListItems
                          text={itemval}
                          key={index}
                          id={index}
                          onSelect={deleteItems}
                          />;
                       })}
                   </ol>
               </div>
           </div>
       </>
   );    
}
export default App
