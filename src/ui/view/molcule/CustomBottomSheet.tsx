import { BottomSheet } from "react-spring-bottom-sheet";
import useBottomSheetStore from "../../../store/stores/BottomSheet.store";

type ExampleProps = {
  dynamicMinHeight: number;
  dynamicMaxHeight: number;
};

export default function CustomBottomSheet({
  dynamicMinHeight,
  dynamicMaxHeight,
}: ExampleProps) {
  const isOpen = useBottomSheetStore<boolean>((state) => state.isOpen);
  const setOpenBottomSheet = useBottomSheetStore(
    (state) => state.setOpenBottomSheet
  );

  return (
    <>
      <button onClick={() => setOpenBottomSheet(!isOpen)}>Open</button>
      <BottomSheet
        open={isOpen}
        snapPoints={() => [dynamicMinHeight, dynamicMaxHeight]}
      >
        My awesome content here
      </BottomSheet>
    </>
  );
}
