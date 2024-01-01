import React from "react";
const SlotM=(props)=>{
    // let x= '😄';
    // let y= '😄';
    // let z= '😵';
    let x=props.x;
    let y=props.y;
    let z=props.z;
    //let {x,y,z} = props;  object distructure
    if(x===y && y===z){
        return(
            <>
                <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is matching</h1>
                </div>
                <hr/>
            </>
        );
    }
    else{
        return(
            <>
                <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is not matching</h1>
                </div>
                <hr/>
            </>
        );
    }
}
const App=()=>{
    return(
        <>
            <h1 className="heading-info"> 🎰 Welcome to 
            <span style={{fontWeight: "bold"}}> Slot Machine game</span> 🎰</h1>
            <div>
            <SlotM x='😄' y='😄' z='😄' />
            <SlotM x='🥪' y='🥪' z='🥪'/>
            <SlotM x='👶' y='🍼' z='👶'/>
            </div>
        </>
    );
}
export default App;
