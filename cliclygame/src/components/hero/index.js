import React from "react";
import "../../css/main.css";


function Hero(){
    return(
        <div className="row hero">
            <div className="col-sm-12">
                <h1>Clicky Game</h1>
                <p className="instructions">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
};

export default Hero;