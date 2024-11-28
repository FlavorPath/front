import useKakaoLoader from "@/hooks/map/useKakaoLoader";
import CustomMapMarker from "@/ui/view/atom/CustomMapMarker";
import { Map } from "react-kakao-maps-sdk";
import { useState } from "react";
import useDynamicMapSize from "@/hooks/map/useDynamicMapSize";
import { useMap } from "@/hooks/map/useMap.hook";
import { css } from "@styled-system/css";
import Toast from "@/ui/view/atom/Toast";

type KaKaoMapProps = {
  setRestarauntId: React.Dispatch<React.SetStateAction<number>>;
  activeLabel?: string;
};

export default function KaKaoMap({
  setRestarauntId,
  activeLabel,
}: KaKaoMapProps) {
  useKakaoLoader();
  const mapSize = useDynamicMapSize();
  const [map, setMap] = useState<any>(null);
  const {
    HoleMarkers,
    LoadingHole,
    HoleError,
    filteredMarkers,
    isLoading,
    isError,
  } = useMap(activeLabel);

  const handleMarkerClick = async (
    latitude: number,
    longitude: number,
    id: number
  ) => {
    const adjustedLatitude = latitude - 0.001;
    if (map) {
      map.setCenter(new window.kakao.maps.LatLng(adjustedLatitude, longitude));
    }
    setRestarauntId(id);
  };

  if (LoadingHole || isLoading)
    return <Toast message={"로딩중"} variant="info" />;
  if (HoleError || isError) return <Toast message={"에러발생"} />;

  const markersToRender = activeLabel ? filteredMarkers : HoleMarkers;

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
      {markersToRender &&
        markersToRender.map((marker, index) => (
          <CustomMapMarker
            key={index}
            location={{
              latitude: marker.location.latitude,
              longitude: marker.location.longitude,
            }}
            id={marker.id}
            name={marker.name}
            labels={marker.labels}
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
