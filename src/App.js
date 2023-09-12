import DESTINATIONS from "./DestinationsData";
import DestinationStructure from "./DestinationStructure";
import ClickAnywhereListener from "./ClickListener";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false); 

  function onTextShown(bool) {
    setState(bool);
  }
  return (
    <ClickAnywhereListener asperji={"asperji"}>
    <div>
      {DESTINATIONS.map(indexValue => {
        return <DestinationStructure key={indexValue.id} {...indexValue} onTextShown={onTextShown}/>
      })}
    </div>
    </ClickAnywhereListener>
  );
}

export default App;
