import React from "react";
import "../../css/main.css";

function Navbar(props){

    return(
        <div class="nav">
            <div class="col-sm-4">
                <h2>Clicky Game</h2>
            </div>
            <div class="col-sm-4">
                <h2>Click on an image to begin</h2>
            </div>
            <div class="col-sm-4">
                <h2>Score: <span>{props.score}</span> | Top Score: <span>{props.topScore}</span></h2>
            </div>
        </div>
    );
}

export default Navbar;