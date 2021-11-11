import React from "react";

export const RangeInput = props => {
  return (
      <div className="" style={{'display': 'flex'}}>
        <div className="RangeInput__text">Add Ranges</div>
        <div className="" style={{'display': 'flex'}}>
            <input type='text' className="RangeInput"/>
            <div className="">-</div>
            <input type='text' className="RangeInput"/>
        </div>
      </div>
  )
};