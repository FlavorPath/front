import { create } from "zustand";

interface RestaurantNavigationState {
  activeTab: string;
  setActiveTab: (Name: string) => void;
}

export const useRestaurantNavigationStore = create<RestaurantNavigationState>(
  (set) => ({
    activeTab: "홈",
    setActiveTab: (Name: string) => set({ activeTab: Name }),
  })
);
