import { MapMarker } from "react-kakao-maps-sdk";
import KoreanMarker from "@/assets/KoreanFood.svg";
import JapaneseMarker from "@/assets/JapaneseFood.svg";
import RamenMarker from "@/assets/Ramen.svg";
import ChineseMarker from "@/assets/ChineseFood.svg";
import WesternMarker from "@/assets/WesternFood.svg";
import Dessert from "@/assets/Dessert.svg";

import useBottomSheetStore from "@/store/stores/BottomSheet.store";

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IProp {
  location: ILocation;
  name: string;
  labels: string[];
  id: number;
  onMarkerClick: (latitude: number, longitude: number) => void;
}

const markerMap = {
  한식: KoreanMarker,
  일식: JapaneseMarker,
  디저트: Dessert,
  중식: ChineseMarker,
  양식: WesternMarker,
} as const;

const CustomMapMarker = ({ location, name, labels, onMarkerClick }: IProp) => {
  const setOpenBottomSheet = useBottomSheetStore(
    (state) => state.setOpenBottomSheet
  );

  const onClick = () => {
    setOpenBottomSheet(true);
    onMarkerClick(location.latitude, location.longitude);
  };

  const markerImageSrc =
    markerMap[labels[0] as keyof typeof markerMap] || KoreanMarker;

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
