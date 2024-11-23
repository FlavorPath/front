import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import useBottomSheetStore from "../../../store/stores/BottomSheet.store";
import { useRef } from "react";

type BottomSheetProps = {
  onNavigate: (id: number) => void; // navigateToRestaurant의 타입 정의
  children: React.ReactNode;
};

export default function CustomBottomSheet({
  children,
  onNavigate,
}: BottomSheetProps) {
  const isOpen = useBottomSheetStore<boolean>((state) => state.isOpen);
  const setOpenBottomSheet = useBottomSheetStore(
    (state) => state.setOpenBottomSheet
  );

  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const handleSpringStart = (event: any) => {
    if (event.type === "SNAP") {
      const restaurantId = 1; // 현재 하드코딩된 값. 필요한 로직으로 변경 가능
      onNavigate(restaurantId);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      open={isOpen}
      snapPoints={() => [370, 400]}
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
