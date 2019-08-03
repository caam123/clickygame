import React from "react";
import "../../css/main.css";

function Cards(props){
    return(
          <div id={props.id}role="img" aria-label="click-item" className="col-sm-3 click-item" onClick = {() => props.clickCount(props.id)}>
            <img src={props.image} alt={props.name} className= "img-raccoon"/>
          </div>
    )
}
export default Cards;