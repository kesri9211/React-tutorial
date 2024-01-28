import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
/*
hooks, Events,
count,setCount is state variable
https://mui.com/material-ui/material-icons/
*/
const App=()=>{
   const[count,setCount]=useState(0);
   const inc=()=>{
       console.log("clicked++");
       setCount(count+1);
   }
   const dec=()=>{
       if(count<=0){
           alert("zero limit exceed");
           return;
       }
       setCount(count-1);
   }
   return(<>
       <div className='main_div'>
       <div className='center_div'>
           <h1>{count}</h1>
           <div className='btn_div'>
           <button onClick={inc}><AddIcon/></button>
           <button onClick={dec}><DeleteIcon/></button>
           </div>
       </div>
       </div>
   </>);
};
export default App
