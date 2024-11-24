import { create } from "zustand";

interface ButtonGroupState {
  activeButton: string;
  setActiveButton: (value: string) => void;
}

export const useButtonGroupStore = create<ButtonGroupState>((set) => ({
  activeButton: "",
  setActiveButton: (value: string) => {
    set({ activeButton: value });
  },
}));
