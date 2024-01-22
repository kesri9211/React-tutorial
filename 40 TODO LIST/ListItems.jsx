//make another component
//passing itemval as text
import React from "react";


const ListItems=(props)=>{
 
  
       return (
       <>
           <div className="todo_style">
           <i className="fa fa-times" aria-hidden="true" onClick={()=>{
               props.onSelect(props.id)
           }} />
          
           <li> {props.text}</li>
           </div>
       </>
       );
}
export default ListItems;
