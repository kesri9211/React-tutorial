/*
: only single default export can be there in file
: other you have to pass in {} 
: can pass multiple variable, function in single export seperated by comma
*/
const message="Import";
const msg2="Learining";

function myName(){
    let msg3="exporting importing function"
    return msg3;
}

export default message;
export {msg2,myName};
