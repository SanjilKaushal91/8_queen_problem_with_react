import "./App.css";
import Cell from "./Cell";
import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import winner from "./winner.gif";

function App() {
  const [temp, setTemp] = useState(0);
  const length = 8;
  const initialArrValue = [];
  for (let i = 0; i < length; i++) {
    const ArrValue = [];
    for (let i = 0; i < length; i++) {
      ArrValue.push("");
    }
    initialArrValue.push(ArrValue);
  }
  const arr = useRef(initialArrValue);
  const handleClick = (rIndex, cIndex) => {
    for (let i = 0; i < length; i++) {
      arr.current[rIndex][i] = "*";
      arr.current[i][cIndex] = "*";
    }
    for (let i = rIndex, j = cIndex; i < length && j < length; i++, j++) {
      arr.current[i][j] = "*";
    }
    for (let i = rIndex, j = cIndex; i >= 0 && j >= 0; i--, j--) {
      arr.current[i][j] = "*";
    }
    for (let i = rIndex, j = cIndex; i < length && j >= 0; i++, j--) {
      arr.current[i][j] = "*";
    }
    for (let i = rIndex, j = cIndex; i >= 0 && j < length; i--, j++) {
      arr.current[i][j] = "*";
    }
    arr.current[rIndex][cIndex] = "Q";
    setTemp(temp + 1);
  };

  return (
    <div className="App">
      {temp === length ? (
        <img
          alt=""
          src={winner}
          style={{
            borderRadius: "50px",
            border: "5px solid white",
            boxShadow: "0px 0px 100px white",
            width: "760px",
          }}
        />
      ) : (
        <div
          style={{
            borderRadius: "50px",
            border: "5px solid white",
            boxShadow: "0px 0px 100px white",
            width: "fit-content",
            height: "fit-content",
            padding: "50px",
          }}
        >
          {arr.current.map((row, rIndex) => {
            return (
              <div key={rIndex}>
                {row.map((item, cIndex) => {
                  return (
                    <Cell
                      item={item}
                      rIndex={rIndex}
                      cIndex={cIndex}
                      arr={arr}
                      handleClick={handleClick}
                      key={cIndex}
                    />
                  );
                })}
                <br />
              </div>
            );
          })}
        </div>
      )}
      <br />
      <br />
      <Button
        style={{ width: "80px", height: "50px", zIndex: "1" }}
        onClick={() => {
          arr.current = initialArrValue;
          setTemp(0);
        }}
        variant="contained"
        color="warning"
      >
        Reset
      </Button>
    </div>
  );
}

export default App;
