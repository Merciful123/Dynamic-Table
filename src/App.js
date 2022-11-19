import "./App.css";
import {heading, feature1, feature2, feature3 } from "./Items/Itemlist";

import Items from "./planPage/Items";

function App() {
  

  return (
    <div className="App">
      
      <Items
        heading={heading}
        feature1={feature1}
        feature2={feature2}
        feature3={feature3}
      />
    </div>
  );
}

export default App;
