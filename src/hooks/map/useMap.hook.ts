import {
  useGetHoleMarkers,
  useGetMarkersByLabel,
} from "@/store/queries/map.query";

export const useMap = (label?: string) => {
  const safeLabel = label ?? "";

  const {
    data: HoleMarkers,
    isLoading: LoadingHole,
    isError: HoleError,
  } = useGetHoleMarkers();
  const {
    data: filteredMarkers,
    isLoading,
    isError,
    isPending,
  } = useGetMarkersByLabel(safeLabel);

  return {
    HoleMarkers,
    LoadingHole,
    HoleError,
    filteredMarkers,
    isLoading,
    isError,
    isPending,
  };
};
