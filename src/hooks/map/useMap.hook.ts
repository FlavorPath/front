import { useMapMarkers } from "@/store/queries/map.query";
import { useButtonGroupStore } from "@/store/stores/map.store";

export const useMap = () => {
  const { activeButton } = useButtonGroupStore(); // activeButton이 라벨 값
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
