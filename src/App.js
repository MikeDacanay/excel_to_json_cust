import { useState } from 'react';
import {uploadWorkbook} from './helpers/helpers';
import {addGroupHandler} from './handlers/handlers';
import './App.css';

export const App = () => {

  // const [inputGroups, setInputGroups] = useState([]);

  return (
    <div className=""
      style={{
        'width': '100vw',
        'height': '100vh',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
      }}>
      {/* {inputGroups}
      <button onClick={() => addGroupHandler([inputGroups, setInputGroups])}>Add Group</button> */}

      <input
        type="file" 
        onChange={uploadWorkbook.bind(null,console.log)} />
    </div>        
  )
}