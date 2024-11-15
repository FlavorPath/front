import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

const Example = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Bottom Sheet</button>
      <BottomSheet open={open} onDismiss={() => setOpen(false)}>
        <p>Your content goes here</p>
      </BottomSheet>
    </>
  );
};

export default Example;
