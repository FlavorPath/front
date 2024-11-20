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
    <BottomSheet
      open={isOpen}
      snapPoints={() => [dynamicMinHeight, dynamicMaxHeight]}
      onDismiss={() => {
        setOpenBottomSheet(false);
      }}
      style={
        {
          "--rsbs-backdrop-bg": "transparent",
          "--rsbs-handle-bg": "rgba(255, 135, 0, 0.8)",
        } as React.CSSProperties
      }
    >
      {children}
    </BottomSheet>
  );
}
