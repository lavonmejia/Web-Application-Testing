import React from "react";
import { useState } from "react";


function Logic(props) {

const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  const [fouls, setFouls] = useState(0);
  const [hits, setHits] = useState(0);

  const manageStrikes = () => {
    setStrikes(strikes + 1);

    if (strikes === 3) {
      setBalls(0);
      setStrikes(0);
    }
  };

  const manageBalls = () => {
    setBalls(balls + 1);

    if (balls === 4) {
      setBalls(0);
      setStrikes(0);
    }
  };

  const manageHits = () => {
    setHits(hits + 1);
    setBalls(0);
    setStrikes(0);
  };

  const manageFouls = () => {
    setFouls(fouls + 1);

    if (strikes <2 ) {
      setStrikes(strikes+1);
    }
  };

  return (
    <div className="App">
      <button onClick={() => manageStrikes()}>strikes:{strikes}</button>

      <button onClick={() => manageBalls()}>balls: {balls}</button>

      <button onClick={() => manageFouls()}>fouls: {fouls}</button>

      <button onClick={() => manageHits()}>hits: {hits}</button>
    </div>
  );
}

export default Logic;
