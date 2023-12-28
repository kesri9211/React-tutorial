import React from "react";
/*
using props we can change the property of component
pass 'props' in funtion to access these attribute -{props.propsName}
*/
function Card(props){
    console.log(props);
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc} alt="photo" className="card_img"/>
                <div className="card_info">
                    <span className="card_category">{props.catagory}</span>
                    <h3 className="card_title">{props.title}</h3>
                    <a href={props.sLink} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    </>
    );
}
export default Card;
