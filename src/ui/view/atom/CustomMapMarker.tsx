import { MapMarker } from "react-kakao-maps-sdk";
import KoreanMarker from "@/assets/KoreanFood.svg";
import JapaneseMarker from "@/assets/JapaneseFood.svg";
import RamenMarker from "@/assets/Ramen.svg";
import ChineseMarker from "@/assets/ChineseFood.svg";
import WesternMarker from "@/assets/WesternFood.svg";
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

// 튜플 형태의 markerMap
const markerMap = [
  ["한식", KoreanMarker],
  ["일식", JapaneseMarker],
  ["디저트", RamenMarker],
  ["중식", ChineseMarker],
  ["양식", WesternMarker],
] as const;

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

  const markerImageSrc =
    markerMap.find(([key]) => key === label[0])?.[1] || KoreanMarker;

  return (
    <MapMarker
      position={{
        lat: location.latitude,
        lng: location.longitude,
      }}
      image={{
        src: markerImageSrc, // 동적으로 결정된 이미지 경로
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
