import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ addPlate, wallet, sushis, setSushis }) {
  const [startIndex, setStartIndex] = useState(0);

  function nextSushis() {
    setStartIndex(startIndex + 4);
  }

  useEffect(() => {
    fetch(" http://localhost:3001/sushis")
      .then((res) => res.json())
      .then((data) => setSushis(data));
  }, [setSushis]);

  return (
    <div className="belt">
      {sushis.slice(startIndex, startIndex + 4).map((sushi) => (
        <Sushi key={sushi.id} {...sushi} addPlate={addPlate} wallet={wallet} />
      ))}
      <MoreButton nextSushis={nextSushis} />
    </div>
  );
}

export default SushiContainer;
