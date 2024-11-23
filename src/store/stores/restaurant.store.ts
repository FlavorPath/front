import { create } from "zustand";
import { storeResetFns } from "./reset.store";
import { RestaurantDetail } from "../queries/restaurant.query";

type RestaurantStore = {
  restaurantDetail: RestaurantDetail | null;
  setRestaurant: (data: RestaurantDetail) => void;
  clearRestaurant: () => void;
};

const initialRestaurantState: RestaurantDetail | null = null;

const useRestaurantStore = create<RestaurantStore>((set) => {
  storeResetFns.add(() => set({ restaurantDetail: initialRestaurantState }));
  return {
    restaurantDetail: initialRestaurantState,
    setRestaurant: (data) => set({ restaurantDetail: data }),
    clearRestaurant: () => set({ restaurantDetail: initialRestaurantState }),
  };
});

export default useRestaurantStore;
