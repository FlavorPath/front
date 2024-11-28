import { useQuery, useQueryClient } from "@tanstack/react-query";
import { API_PATH } from "@/api/api-path";
import axiosInstance from "@/api";

type MarkerResponse = {
  id: number;
  name: string;
  labels: string[];
  location: {
    latitude: number;
    longitude: number;
  };
};

const fetchMapMarkers = async (): Promise<MarkerResponse[]> => {
  const response = await axiosInstance.get(API_PATH.marker);
  if (response.status !== 200) {
    throw new Error("Failed to fetch markers");
  }
  return response.data;
};

const fetchMapMarkersByLabel = async (
  label: string
): Promise<MarkerResponse[]> => {
  const url = `${API_PATH.marker}/label?label=${label}`;
  const response = await axiosInstance.get(url);
  if (response.status !== 200) {
    throw new Error(`Failed to fetch markers for label: ${label}`);
  }
  return response.data;
};

export const useGetHoleMarkers = () => {
  return useQuery<MarkerResponse[]>({
    queryKey: ["markers"],
    queryFn: fetchMapMarkers,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

export const useGetMarkersByLabel = (label: string) => {
  return useQuery<MarkerResponse[]>({
    queryKey: ["markers", label],
    queryFn: () => fetchMapMarkersByLabel(label),
    enabled: !!label,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });
};

export const prefetchMarkersByLabel = (
  queryClient: ReturnType<typeof useQueryClient>,
  label: string
) => {
  queryClient.prefetchQuery({
    queryKey: ["markers", label],
    queryFn: () => fetchMapMarkersByLabel(label),
  });
};
