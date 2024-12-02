import { create } from "zustand";

type MenuItem = {
  name: string;
  price: string;
  photo_url: string;
};

type RestaurantState = {
  restaurantId: number;
  name: string;
  labels: string[];
  images: string[];
  menu: MenuItem[];
  address: string;
  hours: string;
  phone: string;
  isScraped: boolean;
  setRestaurant: (restaurant: Partial<RestaurantState>) => void;
  resetRestaurant: () => void;
};

const initialState: RestaurantState = {
  restaurantId: 0,
  name: "",
  labels: [],
  images: [],
  menu: [],
  address: "",
  hours: "",
  phone: "",
  isScraped: false,
  setRestaurant: () => {},
  resetRestaurant: () => {},
};

export const useRestaurantStore = create<RestaurantState>((set) => ({
  ...initialState,
  setRestaurant: (restaurant) =>
    set((state) => ({
      ...state,
      ...restaurant,
    })),
  resetRestaurant: () => set(() => ({ ...initialState })),
}));
