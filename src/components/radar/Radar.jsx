import React from "react";
import "./radar.css";
function Radar() {
  return (
    <div>
      <div className="canvas">
        <div className="outer-circle">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <div className="radar"></div>
          <div className="main-circle">
            <p></p>
            <p></p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radar;
