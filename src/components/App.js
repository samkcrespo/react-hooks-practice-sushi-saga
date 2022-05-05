import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import NewSushiForm from "./NewSushiForm";

// const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);

  const wallet = 100;
  const walletBalance =
    wallet - plates.reduce((total, plate) => total + plate, 0);

  function addPlate(price) {
    setPlates([...plates, price]);
  }

  function addSushi(newSushi) {
    setSushis([...sushis, newSushi]);
  }

  return (
    <div className="app">
      <SushiContainer
        addPlate={addPlate}
        wallet={walletBalance}
        sushis={sushis}
        setSushis={setSushis}
      />
      <Table plates={plates} wallet={walletBalance} />
      <NewSushiForm addSushi={addSushi} />
    </div>
  );
}

export default App;
