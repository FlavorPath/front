import { useRestaurantDetail } from "@/store/queries/restaurant.query";

const useSelectedRestaurant = (id: number) => {
  const {
    data: restaurantDetail,
    isLoading,
    error,
    refetch,
  } = useRestaurantDetail(id);
  return {
    restaurantDetail,
    isLoading,
    error,
  };
};

export default useSelectedRestaurant;
