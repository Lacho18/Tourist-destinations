import DESTINATIONS from "./DestinationsData";
import DestinationStructure from "./DestinationStructure";

function App() {
  return (
    <div>
      {DESTINATIONS.map(indexValue => {
        return <DestinationStructure key={indexValue.id} {...indexValue} />
      })}
    </div>
  );
}

export default App;
