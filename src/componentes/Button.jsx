import React from "react";
import { ReactDOM } from "react";
import '../App.css'

const Button=()=>{
    return(
        <div className="Button">
            <button>Add</button>
            <button>Sub</button>
            <button>Mul</button>
            <button>Div</button>
        </div>
    );
};
export default Button;