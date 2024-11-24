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

const fetchMapMarkers = async (label?: string) => {
  const url = label
    ? `${API_PATH.marker}/label?label=${encodeURIComponent(label)}`
    : API_PATH.marker;
  const response = await axiosInstance.get(url);
  console.log(`label: ${label} url: ${url}`);
  return response.data;
};

export const useMapMarkers = (label?: string) => {
  return useQuery<MarkerResponse[]>({
    queryKey: ["markers", label],
    queryFn: () => fetchMapMarkers(label),
    staleTime: 1000 * 60 * 5, // 캐시 유지 시간 설정 (5분)
    enabled: label !== undefined, // label이 undefined일 경우 쿼리 비활성화
  });
};
