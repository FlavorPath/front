import useKakaoLoader from "@/hooks/map/useKakaoLoader";
import CustomMapMarker from "@/ui/view/atom/CustomMapMarker";
import { Map } from "react-kakao-maps-sdk";
import { useState } from "react";
import useDynamicMapSize from "@/hooks/map/useDynamicMapSize";
import { useMap } from "@/hooks/map/useMap.hook";
import { css } from "@styled-system/css";
import useSelectedRestaurant from "@/hooks/restaurant/useSelectedRestaurant.hook";
import useRestaurantStore from "@/store/stores/restaurant.store";

export default function KaKaoMap() {
  useKakaoLoader();
  const { filteredMarkers, isLoading, isError } = useMap();
  const mapSize = useDynamicMapSize();
  const [map, setMap] = useState<any>(null);

  const handleMarkerClick = async (
    latitude: number,
    longitude: number,
    restaurantId: number
  ) => {
    const adjustedLatitude = latitude - 0.001;
    if (map) {
      map.setCenter(new window.kakao.maps.LatLng(adjustedLatitude, longitude));
    }
    try {
      const { restaurantDetail } = useSelectedRestaurant(restaurantId); // 데이터를 가져오는 함수
      // const token = localStorage.getItem("jwtToken") || ""; // 토큰 가져오기 (필요 시)
      const { setRestaurant } = useRestaurantStore();
      if (restaurantDetail) {
        setRestaurant(restaurantDetail);
      }
    } catch (error) {
      console.error("에러 발생 in 식당 상세 데이터패칭:", error);
    }
  };

  if (isLoading) return <div>지도 로딩중...</div>;
  if (isError) return <p>오류 발생.</p>;

  return (
    <Map
      id="map"
      center={{
        lat: 37.5665,
        lng: 126.978,
      }}
      style={mapSize}
      level={3}
      onCreate={(mapInstance) => setMap(mapInstance)}
      className={css({
        position: "fixed",
        left: 0,
      })}
    >
      {filteredMarkers &&
        filteredMarkers.map((marker, index) => (
          <CustomMapMarker
            key={index}
            location={{
              latitude: marker.location.latitude,
              longitude: marker.location.longitude,
            }}
            restaurantId={marker.restaurantId}
            name={marker.name}
            label={marker.label}
            onMarkerClick={() =>
              handleMarkerClick(
                marker.location.latitude,
                marker.location.longitude,
                marker.restaurantId
              )
            }
          />
        ))}
    </Map>
  );
}
