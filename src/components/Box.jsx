import React from 'react'

function Box({onClick, color, flash}) 
  {return (
    <div
    //    onClick={onClick}
      className={`box ${color} ${flash ? "flash" : ""}`}>
    </div>
  )}


export default Box