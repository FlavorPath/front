import { useMapMarkers } from "@/store/queries/map.query";
import { useButtonGroupStore } from "@/store/stores/label.store";

export const useMap = () => {
  const { activeButton } = useButtonGroupStore();
  const {
    data: filteredMarkers,
    isLoading,
    isError,
  } = useMapMarkers(activeButton);

  return {
    activeButton,
    filteredMarkers: filteredMarkers || [],
    isLoading,
    isError,
  };
};
