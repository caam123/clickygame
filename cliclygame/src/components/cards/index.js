import React from "react";
import "../../css/main.css";

function Cards(props){
    return(
          <div id={props.id}role="img" aria-label="click-item" className="col-sm-3 click-item">
            <img src={props.image} alt="image-1" className= "img-raccoon"/>
          </div>
    )
    
}
export default Cards;