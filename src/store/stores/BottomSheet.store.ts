import { create } from "zustand";

type BottomSheetState = {
  isOpen: boolean;
  setOpenBottomSheet: (isOpen: boolean) => void;
};

const useBottomSheetStore = create<BottomSheetState>((set) => ({
  isOpen: false,
  setOpenBottomSheet: (isOpen) => set({ isOpen }),
}));

export default useBottomSheetStore;
