import React, {useState} from "react"; 

 const TraficLights = () => {
   
   const [clicked, selecClicked] = useState ("Yellow")

   const changeColor = (color) => {
    console.log (color);
    selecClicked(color);
   }
   
    return (
        
        

        <div className="Trafic-area">
            <div className="support"></div>
            <div className="main-box">
            <div
          className={`box-light Red ${clicked === "Red" ? "light-on" : ""}`}
          onClick={() => changeColor("Red")}
        ></div>
                <div className={`box-light Yellow ${clicked === "Yellow" ? "light-on" : ""}`} onClick={() => changeColor("Yellow")}></div>
                
                <div className={`box-light Green ${clicked === "Green" ? "light-on" : ""}`} onClick={() => changeColor("Green")}></div>
            </div> 
        </div>
        
        
    );

 };

 export default TraficLights