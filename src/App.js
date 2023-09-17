import DESTINATIONS from "./DestinationsData";
import DestinationStructure from "./DestinationStructure";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import DestinationContentStructure from "./DestinationContent/DestinationContentStructure";
import { useState } from "react";

let currentIndex = 0;

function App() {
  const [descriptionsArray, setDescriptionsArray] = useState(DESTINATIONS);
  const [selectedDestination, setSelectedDestination] = useState(false);

  //function that clear the options by selected continent
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

  //function that set all the elements in the array in case of mising values
  async function setAllDestinations() {
    setDescriptionsArray(DESTINATIONS);
  }

  //function that handle the search bar
  async function seachHandle(information) {
    searchByTown(information);
  }

  //function syrching in the array by its town content
  async function searchByTown(townRegex) {
    if (townRegex === '') {
      setAllDestinations();
      return;
    }
  
    const regex = new RegExp(townRegex, 'i');
  
    const filteredDestinations = DESTINATIONS.filter((destination) =>
      regex.test(destination.town)
    );
  
    setDescriptionsArray(filteredDestinations);
  }

  //function that handle the click of a destination by a user
  function onSelectedDestination(componentID) {
    currentIndex = componentID;
    setSelectedDestination(true);
  }

  if(!selectedDestination) {
    return (
      <div>
        <SearchBar getSearchText ={seachHandle}/>
        <MenuBar onMenuClickedButton={MenuSelection} onWorldClicked={setAllDestinations}/>
        {descriptionsArray.map(indexValue => {
          return <DestinationStructure key={indexValue.id} {...indexValue} selected={onSelectedDestination}/>
        })}
      </div>
    );
  }
  else {
    return(
      <div>
        <DestinationContentStructure  {...DESTINATIONS[currentIndex - 1]} onBack = {() => setSelectedDestination(false)}/>
      </div>
    );
  }
}

export default App;
