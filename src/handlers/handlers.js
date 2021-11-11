import { InputGroup } from "../components/InputGroup/InputGroup"

export const addGroupHandler = ([inputGroups, setInputGroups]) => {
    const sendThis = [...inputGroups];    
    sendThis.push(<InputGroup key={sendThis.length}/>);
    setInputGroups(sendThis);
}

