import { API_PATH } from "@/api/api-path";
import { HttpResponse, http } from "msw";
import { delayForDevelopment } from ".";
import { restaurantMockData } from "../mock-data/restaurant.mock";

export const restaurantHandler = [
  http.get(`${API_PATH.restaurant}/:id`, async ({ params }) => {
    const { id } = params;
    console.log(`id: ${id}`);
    await delayForDevelopment();
    if (!id) {
      return new HttpResponse("Not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
    const restaurant = restaurantMockData.find(
      (data) => data.restaurantId.toString() === id
    );
    if (!restaurant) {
      return new HttpResponse("Not found", {
        status: 404,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
    return HttpResponse.json(restaurant);
  }),
];
