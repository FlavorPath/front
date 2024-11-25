import { API_PATH } from "@/api/api-path";
import { HttpResponse, http } from "msw";
import { delayForDevelopment } from ".";
import { restaurantMockData } from "../mock-data/restaurant.mock";

export const restaurantHandler = [
  http.get(`${API_PATH.restaurant}/:id`, async ({ params }) => {
    const { id } = params;
    // console.log(`식당 상세 데이터 요청: ${id}`);
    await delayForDevelopment();
    return HttpResponse.json(restaurantMockData, { status: 200 });
  }),
];
