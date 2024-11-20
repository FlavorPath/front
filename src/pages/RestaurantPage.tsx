import { css } from "@styled-system/css";

const mockRestaurant = [
  {
    restaurantId: 1,
    name: "홀짝집",
    label: ["한식", "고기"],
    photo: [
      {
        photoId: 1,
        photoUrl:
          "https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=300&format=webply&optimize=medium",
      },
      {
        photoId: 2,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRJOrTwdt2QZc7F4VKcaG4pB0QOuSiawmJA&s",
      },
    ],
    menu: [
      {
        name: "김치찌개",
        price: "13900원",
      },
    ],
    geoLocation: { latitude: 37.56, longitude: 126.97 },
    location: "서울 송파구 백제고분로 69",
    hours: "14:00-00:00",
    phone: "152-1541",
    isScraped: false,
  },
];

const RestaurantPage = () => {
  return (
    <div>
      <div>레스토랑 상세</div>
    </div>
  );
};

export default RestaurantPage;
