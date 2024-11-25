import { useMapMarkers } from "@/store/queries/map.query";
import { useButtonGroupStore } from "@/store/stores/map.store";

export const useMap = () => {
  const { activeButton } = useButtonGroupStore();
  const {
    data: filteredMarkers,
    isLoading,
    isError,
    isPending,
  } = useMapMarkers(activeButton);

  return {
    activeButton,
    filteredMarkers: filteredMarkers || [],
    isLoading,
    isError,
    isPending,
  };
};
