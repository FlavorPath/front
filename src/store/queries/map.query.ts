import { useQuery } from "@tanstack/react-query";
import { API_PATH } from "@/api/api-path";
import axiosInstance from "@/api";

type MarkerResponse = {
  id: number;
  name: string;
  label: string[];
  location: {
    latitude: number;
    longitude: number;
  };
};

const fetchMapMarkers = async (label?: string) => {
  const url = label ? `${API_PATH.marker}?label=${label}` : API_PATH.marker;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const useMapMarkers = (label?: string) => {
  return useQuery<MarkerResponse[]>({
    queryKey: ["markers", label],
    queryFn: () => fetchMapMarkers(label),
    staleTime: 1000 * 60 * 5,
  });
};
