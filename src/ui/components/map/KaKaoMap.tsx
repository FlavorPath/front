import useKakaoLoader from "@/hooks/map/useKakaoLoader";
import CustomMapMarker from "@/ui/view/atom/CustomMapMarker";
import { Map } from "react-kakao-maps-sdk";

type LabelType = ("Korean" | "Japanese" | "Ramen" | "Chinese" | "Western")[];

export default function KaKaoMap() {
  useKakaoLoader();

  const mockMarkerResponse: {
    restaurantId: number;
    name: string;
    label: LabelType;
    location: { latitude: number; longitude: number };
  }[] = [
    {
      restaurantId: 1,
      name: "홀짝집",
      label: ["Korean"],
      location: {
        latitude: 34.450701,
        longitude: 125.570667,
      },
    },
    {
      restaurantId: 2,
      name: "만리지화",
      label: ["Japanese"],
      location: {
        latitude: 33.450701,
        longitude: 126.570667,
      },
    },
  ];

  return (
    <Map
      id="map"
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        width: "390px",
        height: "780px",
      }}
      level={3}
    >
      {mockMarkerResponse.map((mock, index) => (
        <CustomMapMarker
          key={index}
          location={{
            latitude: mock.location.latitude,
            longitude: mock.location.longitude,
          }}
          restaurantId={mock.restaurantId}
          name={mock.name}
          label={mock.label}
        />
      ))}
    </Map>
  );
}
