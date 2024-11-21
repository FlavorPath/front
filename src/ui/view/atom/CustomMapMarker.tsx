import { MapMarker } from "react-kakao-maps-sdk";
import KoreanMarker from "@/assets/KoreanFood.svg";
import JapaneseMarker from "@/assets/JapaneseFood.svg";
import RamenMarker from "@/assets/Ramen.svg";
import ChineseMarker from "@/assets/ChineseFood.svg";
import WesternMarker from "@/assets/WesternFood.svg";
import useBottomSheetStore from "@/store/stores/BottomSheet.store";
import { useMemo } from "react";

interface ILocation {
  latitude: number;
  longitude: number;
}

interface IProp {
  location: ILocation;
  restaurantId: number;
  name: string;
  label: string[];
  onMarkerClick: (latitude: number, longitude: number) => void; // 클릭 이벤트 핸들러
}

const markerMap = {
  한식: KoreanMarker,
  일식: JapaneseMarker,
  라멘: RamenMarker,
  중식: ChineseMarker,
  양식: WesternMarker,
} as const;

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
    console.log(`라벨: ${label}`);
    setOpenBottomSheet(true);
    onMarkerClick(location.latitude, location.longitude);
  };

  const markerImageSrc = useMemo(
    () => markerMap[label[0] as keyof typeof markerMap] ?? KoreanMarker,
    [label]
  );

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
