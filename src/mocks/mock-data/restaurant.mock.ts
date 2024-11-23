import { RestaurantDetail } from "@/store/queries/restaurant.query";

export const restaurantMockData: RestaurantDetail = {
  restaurantId: 1,
  name: "홀짝집",
  labels: ["한식", "돼지고기", "김치찌개"], // 'label'을 'labels'로 수정
  menu: [
    {
      name: "돼지김치구이",
      price: "13,900원",
      photo_url:
        "https://i.namu.wiki/i/VBcDkoPXajYoNcRUcVHQdfvB-Npe16B_s3ULp71MXsw2qcyVgvbZjQtQOFXKcZBn36hB1O07LSPkLYEKRtP5FA.webp",
    },
    {
      name: "차돌김치구이",
      price: "12,900원",
      photo_url:
        "https://cdn.veritas-a.com/news/photo/201804/114602_87966_2134.jpg",
    },
  ],
  address: "서울 송파구 백제고분로 69",
  hours: "14:00 - 00:00",
  phone: "152-1541",
  isScraped: true,
};
