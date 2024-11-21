import { create } from "zustand";

interface NavigationState {
  activeTab: string;
  setActiveTab: (iconName: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeTab: "HomeIcon",
  setActiveTab: (iconName: string) => set({ activeTab: iconName }),
}));
