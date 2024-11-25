import {
  // updateScrapeMutation,
  useRestaurantDetail,
} from "@/store/queries/restaurant.query";

const useSelectedRestaurant = (id: number) => {
  const {
    data: restaurantDetail,
    isLoading,
    error,
    refetch,
  } = useRestaurantDetail(id);
  const handleUpdateScrape = (id: number) => {
    // updateScrapeMutation.mutate(id);
  };
  return {
    restaurantDetail,
    isLoading,
    error,
    handleUpdateScrape,
  };
};

export default useSelectedRestaurant;
