import { Button } from "@mui/material";
import React from "react";
import queen from "./queen.png";

export default function Cell({ item, rIndex, cIndex, handleClick }) {
  const isDisable = item === "Q" || item === "*";
  return (
    <Button
      style={{
        width: "90px",
        height: "90px",
        color: "black",
        fontWeight: 700,
        fontSize: "25px",
        backgroundColor: isDisable && "rgb(255 255 255 / 76%)",
        border: "5px solid",
        borderCollapse: "collapse",
        zIndex: "1",
      }}
      color="warning"
      onClick={() => {
        console.log(rIndex, cIndex);
        handleClick(rIndex, cIndex);
      }}
      disabled={isDisable}
    >
      {item === "Q" && <img alt="" style={{ width: "80px" }} src={queen} />}
    </Button>
  );
}
