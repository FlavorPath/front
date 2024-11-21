import { API_PATH } from "@/api/api-path";
import { HttpResponse, http } from "msw";
import { mapMockData } from "../mock-data/map.mock";
import { delayForDevelopment } from ".";

export const mapHandlers = [
  http.get(API_PATH.marker, async () => {
    await delayForDevelopment();
    return HttpResponse.json(mapMockData);
  }),
  http.get(API_PATH.marker, async ({ request }) => {
    const url = new URL(request.url);
    const label = url.searchParams.get("label");
    await delayForDevelopment();
    if (label) {
      return HttpResponse.json(
        mapMockData.filter((data) => data.label.includes(label))
      );
    }
    // 라벨 없을 때 전체 데이터 반환
    return HttpResponse.json(mapMockData);
  }),
];
