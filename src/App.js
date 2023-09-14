import DESTINATIONS from "./DestinationsData";
import DestinationStructure from "./DestinationStructure";
import MenuBar from "./MenuBar";
import { useState } from "react";

function App() {
  const [descriptionsArray, setDescriptionsArray] = useState(DESTINATIONS);

  function MenuSelection(buttonId) {
      setDescriptionsArray(prevDestinations => {
        if(prevDestinations.length < DESTINATIONS.length) {
            prevDestinations = DESTINATIONS;
        }
        let fileteredDestinations = prevDestinations.filter(indexValue => {
          return indexValue.continent === buttonId ? true : false;
        });
        return fileteredDestinations;
      })
  }

  function setAllDestinations() {
    setDescriptionsArray(prevDestinations => {
      prevDestinations = DESTINATIONS;
      return prevDestinations;
    });
  }

  return (
    <div>
      <MenuBar onMenuClickedButton={MenuSelection} onWorldClicked={setAllDestinations}/>
      {descriptionsArray.map(indexValue => {
        return <DestinationStructure key={indexValue.id} {...indexValue} />
      })}
    </div>
  );
}

export default App;
