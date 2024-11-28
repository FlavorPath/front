import {
  useGetHoleMarkers,
  useGetMarkersByLabel,
  prefetchMarkersByLabel,
} from "@/store/queries/map.query";
import { useQueryClient } from "@tanstack/react-query";

export const useMap = (label?: string) => {
  const queryClient = useQueryClient();
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

  const labels = ["한식", "일식", "중식", "양식", "디저트"];

  labels
    .filter((label) => label !== safeLabel)
    .forEach((label) => {
      prefetchMarkersByLabel(queryClient, label);
    });

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
