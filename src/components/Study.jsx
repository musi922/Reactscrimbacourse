import React from "react";

export default function Study(props){
    return(
        <div>
            {props.setup && <h3>setup: {props.setup}</h3>}
            <p>Punchline: {props.punchline}</p>
        </div>

    )
}