//App.js is a component that contains all other component
import React from "react";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
//create function and use component as you want and then export
function App(){
   return( <>
        <Heading/>
        <Para/>
        <List/>
        <Para/>
        </>
   );
}
export default App;
