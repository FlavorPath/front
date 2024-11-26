import { useQuery } from "@tanstack/react-query";
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

const fetchMapMarkers = async () => {
  const url = API_PATH.marker;
  const response = await axiosInstance.get(url);
  return response.data;
};

const fetchMapMarkersByLabel = async (label: string) => {
  const url = `${API_PATH.marker}/label?label=${label}`;
  const response = await axiosInstance.get(url);
  return response.data;
};

export const useGetHoleMarkers = () => {
  return useQuery<MarkerResponse[]>({
    queryKey: ["markers"],
    queryFn: () => fetchMapMarkers(),
  });
};

export const useGetMarkersByLabel = (label: string) => {
  return useQuery<MarkerResponse[]>({
    queryKey: ["markers", label],
    queryFn: () => fetchMapMarkersByLabel(label),
  });
};
