export interface Store {
  restaurantId: number;
  name: string;
  address: string;
  labels: string[];
  photo_url: string;
  isBookmarked: boolean;
}

export const storesData: Store[] = [
  {
    restaurantId: 1,
    name: '청진옥',
    address: '서울특별시 종로구 종로3길 32 (청진동)',
    labels: ['한식'],
    photo_url: 'https://static.wixstatic.com/media/42e291_323d0d0aab0f4774b03429e6782439fd~mv2_d_4126_2756_s_4_2.jpg/v1/fill/w_464,h_464,usm_1.20_1.00_0.01/file.webp',
    isBookmarked: true,
  },
  {
    restaurantId: 2,
    name: '펠트커피 청계천점',
    address: '서울특별시 중구 청계천로 14 (무교동) 한국정보화진흥원 1층',
    labels: ['카페'],
    photo_url: 'https://lh3.googleusercontent.com/p/AF1QipNzwmOGV2HpV7cQZE7IZOuVEHAvNRKy6GBGKtTj=s1360-w1360-h1020-rw',
    isBookmarked: false,
  },
  {
    restaurantId: 3,
    name: '광화문 미진',
    address: '서울특별시 종로구 종로 19 ',
    labels: ['한식'],
    photo_url: 'https://modo-phinf.pstatic.net/20171218_158/1513609024711hLctN_JPEG/mosaVamH4n.jpeg?type=f353_235',
    isBookmarked: true,
  },
  {
    restaurantId: 4,
    name: '만리지화',
    address: '서울특별시 종로구 종로3길 17 (청진동) D타워 리플레이스 광화문 4층',
    labels: ['일식'],
    photo_url: 'https://www.sunatfood.com/images_new/brand/mj/story/top_visual01_m.jpg',
    isBookmarked: false,
  },
  {
    restaurantId: 5,
    name: '뽐모도로',
    address: '서울 종로구 새문안로9길 19-1 일선빌딩 1층',
    labels: ['양식', '면류'],
    photo_url: 'https://photo_url.siksinhot.com/place/1538965574835107.jpg',
    isBookmarked: false,
  },
  {
    restaurantId: 6,
    name: '토속촌 삼계탕',
    address: '서울특별시 종로구 자하문로5길 5',
    labels: ['한식'],
    photo_url: 'http://tosokchon.com/images/kr/sub02/content01.png',
    isBookmarked: false,
  },
  {
    restaurantId: 7,
    name: '정돈',
    address: '서울 종로구 대학로9길 12 지층',
    labels: ['일식'],
    photo_url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/18/dd/52/photo0jpg.jpg?w=1800&h=1000&s=1',
    isBookmarked: false,
  },
  {
    restaurantId: 8,
    name: '종로계림닭도리탕',
    address: '서울시 종로구 돈화문로4길 39',
    labels: ['중식'],
    photo_url: 'http://www.jongrokelim.com/uploaded/banner/f40fa3835a81f0999a715cacd6a8f83c.png',
    isBookmarked: false,
  },
];