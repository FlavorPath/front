import { useEffect } from "react";
import {
  useGetHoleMarkers,
  useGetMarkersByLabel,
  prefetchMarkersByLabel,
} from "@/store/queries/map.query";
import { useQueryClient } from "@tanstack/react-query";
import { MAP_LABELS } from "@/constants/mapLabels";

export const useMap = (label?: string) => {
  const queryClient = useQueryClient();
  const safeLabel = label ?? "";
  const HoleMarkersQuery = useGetHoleMarkers();
  const filteredMarkersQuery = useGetMarkersByLabel(safeLabel);

  useEffect(() => {
    try {
      MAP_LABELS.filter((l) => l !== safeLabel).forEach((label) => {
        prefetchMarkersByLabel(queryClient, label);
      });
    } catch (e) {
      console.error("라벨에 의한 프리패칭 실패: ", e);
    }
  }, [safeLabel, queryClient]);

  return {
    markers: {
      hole: HoleMarkersQuery.data,
      filtered: filteredMarkersQuery.data,
    },
    isLoading: {
      hole: HoleMarkersQuery.isLoading,
      filtered: filteredMarkersQuery.isLoading,
    },
    isError: {
      hole: HoleMarkersQuery.isError,
      filtered: filteredMarkersQuery.isError,
    },
    isPending: filteredMarkersQuery.isPending,
  };
};
