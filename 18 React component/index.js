//#18 React component
import React from "react";
import ReactDOM from "react-dom";
//component is created now to use that component first import it
//App.js is a component that contains all other component
import App from "./App";
//component is like a tag we can make our own tag in react 
//use component again and again and make change in component only 
ReactDOM.render(<App />,document.getElementById('root'));
