import React from "react";
import "../../css/main.css";

function Navbar(props){

    return(
        <div className="nav">
            <div className="col-sm-4">
                <h2>Clicky Game</h2>
            </div>
            <div className="col-sm-4">
                <h2>Click on an image to begin</h2>
            </div>
            <div className="col-sm-4">
                <h2>Score: {props.score} | Top Score: {props.topscore}</h2>
            </div>
        </div>
    );
}

export default Navbar;