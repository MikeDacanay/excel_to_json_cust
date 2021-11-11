import { useState } from 'react';
import {uploadWorkbook} from './helpers/helpers';
import {addGroupHandler} from './handlers/handlers';
import './App.css';

export const App = () => {

  const [inputGroups, setInputGroups] = useState([]);

  return (
    <div className="" style={{'paddingTop': '100px'}}>
      {inputGroups}
      <button onClick={() => addGroupHandler([inputGroups, setInputGroups])}>Add Group</button>

      <input style={{'display': 'flex'}}
        type="file" 
        onChange={uploadWorkbook.bind(null,console.log)} />
    </div>        
  )
}