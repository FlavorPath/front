import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import useBottomSheetStore from "../../../store/stores/BottomSheet.store";
import { useRef } from "react";
import useDynamicBottomSheetHeight from "@/hooks/useDynamicBottomSheetHeight";

type BottomSheetProps = {
  navigateToRestaurant: (id: number) => void; // navigateToRestaurant의 타입 정의
  restarauntId: number;
  children: React.ReactNode;
};

export default function CustomBottomSheet({
  children,
  navigateToRestaurant,
  restarauntId,
}: BottomSheetProps) {
  const isOpen = useBottomSheetStore<boolean>((state) => state.isOpen);
  const setOpenBottomSheet = useBottomSheetStore(
    (state) => state.setOpenBottomSheet
  );

  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const handleSpringStart = (event: any) => {
    if (event.type === "SNAP") {
      navigateToRestaurant(restarauntId);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      open={isOpen}
      snapPoints={() => [370, 844]}
      onDismiss={() => {
        setOpenBottomSheet(false);
      }}
      onSpringStart={handleSpringStart}
      style={
        {
          "--rsbs-backdrop-bg": "transparent",
          "--rsbs-handle-bg": "rgba(255, 135, 0, 0.8)",
          zIndex: 1000,
          position: "fixed",
        } as React.CSSProperties
      }
    >
      {children}
    </BottomSheet>
  );
}
