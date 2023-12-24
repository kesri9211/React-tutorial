//#20 ES6 export import MODULE in reactjs
//to use js in html-tag use {}
//can use any name inplace of message(default)
import React from "react";
import ReactDOM from "react-dom";
//import message, { msg2, myName } from "./App"; or import ALL
import * as ques from "./App";
//ques is object 
ReactDOM.render(
    <>
        <ol>
            <li>Export</li>
            <li>{ques.default}</li>
            <li>{ques.msg2}</li>
            <li>{ques.myName()}</li>
        </ol>
    </>,
    document.getElementById('root')
);
