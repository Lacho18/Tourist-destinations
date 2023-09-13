import DESTINATIONS from "./DestinationsData";
import DestinationStructure from "./DestinationStructure";
import { useState } from "react";

function App() {
  const [boolean, setBoolean] = useState(false); 
  const [someBool, setSomeBool] = useState(false);

  function onTextShown(bool) {
    setBoolean(bool);
  }

  return (
    <div>
      {DESTINATIONS.map(indexValue => {
        return <DestinationStructure key={indexValue.id} {...indexValue} onTextShown={onTextShown}/>
      })}
    </div>
  );
}

export default App;
