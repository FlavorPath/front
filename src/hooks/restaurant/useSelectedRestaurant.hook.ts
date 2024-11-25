import {
  useRestaurantDetail,
  useUpdateScrapeMutation,
} from "@/store/queries/restaurant.query";

const useSelectedRestaurant = (id: number) => {
  const {
    data: restaurantDetail,
    isLoading,
    error,
    refetch,
  } = useRestaurantDetail(id);
  const { mutate, isPending: isMutating } = useUpdateScrapeMutation();
  return {
    restaurantDetail,
    isLoading,
    error,
    mutate,
    isMutating,
  };
};

export default useSelectedRestaurant;
