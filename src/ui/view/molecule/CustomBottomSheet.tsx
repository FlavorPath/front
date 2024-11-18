import { BottomSheet } from "react-spring-bottom-sheet";
import useBottomSheetStore from "../../../store/stores/BottomSheet.store";

type BottomSheetProps = {
  dynamicMinHeight: number;
  dynamicMaxHeight: number;
  children: React.ReactNode;
};

export default function CustomBottomSheet({
  dynamicMinHeight,
  dynamicMaxHeight,
  children,
}: BottomSheetProps) {
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
        {children}
      </BottomSheet>
    </>
  );
}
