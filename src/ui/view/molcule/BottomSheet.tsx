import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

export default function Example() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const dynamicMinHeight = 300;
  const dynamicMaxHeight = window.innerHeight * 0.8;
  return (
    <>
      setOpenBottomSheet
      <button onClick={() => setOpenBottomSheet(true)}>Open</button>
      <BottomSheet
        open={openBottomSheet}
        // 높이 설정
        snapPoints={() => [dynamicMinHeight, dynamicMaxHeight]}
      >
        My awesome content here
      </BottomSheet>
    </>
  );
}
