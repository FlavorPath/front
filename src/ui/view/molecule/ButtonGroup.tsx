import React, { useState } from "react";

import { css } from "@styled-system/css";
import Button from "../atom/Button";

const buttonItems = [
  { label: "한식", value: "korean" },
  { label: "일식", value: "japanese" },
  { label: "중식", value: "chinese" },
  { label: "양식", value: "western" },
  { label: "카페", value: "cafe" },
];

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  const handleClick = (value: string) => {
    setActiveButton(value);
    console.log(`Selected: ${value}`);
  };

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "75px",
        position: "fixed",
        zIndex: 1000,
        marginLeft: "30px",
      })}
    >
      {buttonItems.map((item) => (
        <Button
          key={item.value}
          variant={activeButton === item.value ? "filled" : "outlined"}
          size="small"
          className={css({
            width: "55px",
            height: "30px",
            fontSize: "12px",
            padding: "none",
            borderRadius: "16px",
            whiteSpace: "nowrap",
            border: "2px solid",
          })}
          onClick={() => handleClick(item.value)}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
