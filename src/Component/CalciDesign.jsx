import React, { useState } from "react";
import { Box } from "@mui/material";
import './calciDesign.css';


function CalciDesign() {

    const [result,setResult] = useState("");

    const handleClick = (event) => {
        debugger;

        setResult(result.concat(event.target.value));
    }
    const clear = () => {
        setResult("");

    }
    const backspace = () => {
        setResult(result.slice(0, result.length - 1));
    }
    const calculate = () => {
    setResult(eval(result).toString());
    
    }

    return (
        <div>
             <h1>CALCULATOR</h1>
            <Box className="mainContainer">
               
                
                    <input type="text" value={result} />

                    <div className="KeypadContainer">
                        <button onClick={clear} id="clear" className="heightlighted">AC</button>
                        <button onClick={backspace} id="backspace" className="heightlighted">C</button>
                        
                        <button value="%" onClick={handleClick} className="heightlighted">%</button>
                        <button value="/" onClick={handleClick} className="heightlighted">&divide;</button>

                        <button value="7" onClick={handleClick} >7</button>
                        <button value="8" onClick={handleClick}>8</button>
                        <button value="9" onClick={handleClick}>9</button>
                        <button value="*" onClick={handleClick} className="heightlighted">&times;</button>
                        <button value="4" onClick={handleClick}>4</button>
                        <button value="5" onClick={handleClick}>5</button>
                        <button value="6" onClick={handleClick}>6</button>
                        <button value="-" onClick={handleClick} className="heightlighted">&ndash;</button>
                        <button value="3" onClick={handleClick}>3</button>
                        <button value="2" onClick={handleClick}>2</button>
                        <button value="1" onClick={handleClick}>1</button>
                        <button value="+" onClick={handleClick} className="heightlighted">+</button>
                        <button value="0" onClick={handleClick}>0</button>
                        <button onClick={handleClick}>.</button>
                        <button onClick={calculate} id="result" className="heightlighted"> =</button>
                    </div>
                
            </Box>
        </div>
    )

}
export default CalciDesign