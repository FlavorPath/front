import useKakaoLoader from "@/hooks/map/useKakaoLoader";
import CustomMapMarker from "@/ui/view/atom/CustomMapMarker";
import { Map } from "react-kakao-maps-sdk";
import { useState } from "react";
import useDynamicMapSize from "@/hooks/map/useDynamicMapSize";
import { useMap } from "@/hooks/map/useMap.hook";
import { css } from "@styled-system/css";

type KaKaoMapProps = {
  setRestarauntId: React.Dispatch<React.SetStateAction<number>>;
};

export default function KaKaoMap({ setRestarauntId }: KaKaoMapProps) {
  useKakaoLoader();
  const [map, setMap] = useState<any>(null);
  const { filteredMarkers = [], isLoading, isError } = useMap();

  const mapSize = useDynamicMapSize();

  const handleMarkerClick = async (
    latitude: number,
    longitude: number,
    restaurantId: number
  ) => {
    const adjustedLatitude = latitude - 0.001;
    if (map) {
      map.setCenter(new window.kakao.maps.LatLng(adjustedLatitude, longitude));
    }
    setRestarauntId(restaurantId);
  };

  if (isLoading) return <div>지도 로딩중...</div>;
  if (isError) return <p>Something went wrong. Please try again.</p>;

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
            restaurantId={marker.id}
            name={marker.name}
            label={marker.label}
            onMarkerClick={() =>
              handleMarkerClick(
                marker.location.latitude,
                marker.location.longitude,
                marker.id
              )
            }
          />
        ))}
    </Map>
  );
}
