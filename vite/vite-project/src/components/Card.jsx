import React from "react";
import pic from "../img.jpeg";
import "../components/Card.css";
const Card=(props)=>{
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.pic} alt="abes " height="200px"/>
            <h2>{props.roll}</h2>
        </div>
    );
};
export default Card;