import { API_PATH } from "@/api/api-path";
import { HttpResponse, http } from "msw";
import { delayForDevelopment } from ".";
import { restaurantMockData } from "../mock-data/restaurant.mock";

export const restaurantHandler = [
  http.get(`${API_PATH.restaurant}/:id`, async ({ params }) => {
    const { id } = params;
    console.log(`식당 상세 데이터 요청: ${id}`);
    await delayForDevelopment();
    if (!id || typeof id !== "string") {
      return new HttpResponse("message: 식당을 찾을 수 없음", {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const restaurant = restaurantMockData.find(
      (data) => data.restaurantId.toString() === id
    );
    if (!restaurant) {
      return new HttpResponse(
        JSON.stringify({ message: "식당을 찾을 수 없음" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return HttpResponse.json(restaurant, { status: 200 });
  }),
];
