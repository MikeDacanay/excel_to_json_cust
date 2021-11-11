import React from "react";
import { CategoryInput } from "../CategoryInput/CategoryInput";
import { RangeInput } from "../RangeInput/RangeInput";

export const InputGroup = props => {
  return (
    <div className="InputGroup" style={{'display': 'flex'}}>        
        <CategoryInput/>
        <RangeInput/>
    </div>
  )
}; 