import { MapMarker } from "react-kakao-maps-sdk";
import KoreanMarker from "@/assets/KoreanFood.svg";
import useBottomSheetStore from "@/store/stores/BottomSheet.store";

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IProp {
  location: ILocation;
  restaurantId: number;
  name: string;
  label: string[];
  onMarkerClick: (latitude: number, longitude: number) => void;
}

const CustomMapMarker = ({
  location,
  restaurantId,
  name,
  label,
  onMarkerClick,
}: IProp) => {
  const setOpenBottomSheet = useBottomSheetStore(
    (state) => state.setOpenBottomSheet
  );

  const onClick = () => {
    setOpenBottomSheet(true);
    onMarkerClick(location.latitude, location.longitude);
  };

  const markerImageSrc = KoreanMarker;

  return (
    <MapMarker
      position={{
        lat: location.latitude,
        lng: location.longitude,
      }}
      image={{
        src: markerImageSrc,
        size: {
          width: 34,
          height: 43,
        },
      }}
      title={name}
      onClick={onClick}
    />
  );
};

export default CustomMapMarker;
