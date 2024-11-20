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

type LabelType = ("Korean" | "Japanese" | "Ramen" | "Chinese" | "Western")[];

interface IProp {
  location: ILocation;
  restaurantId: number;
  name: string;
  label: LabelType;
  onMarkerClick: (latitude: number, longitude: number) => void; // 클릭 이벤트 핸들러
}

const markerMap = {
  Korean: KoreanMarker,
  Japanese: JapaneseMarker,
  Ramen: RamenMarker,
  Chinese: ChineseMarker,
  Western: WesternMarker,
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
    console.log(`식당이름: ${name}`);
    setOpenBottomSheet(true);
    onMarkerClick(location.latitude, location.longitude);
  };

  return (
    <MapMarker
      position={{
        lat: location.latitude,
        lng: location.longitude,
      }}
      image={{
        src: markerMap[label[0]],
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
