import { API_PATH } from "@/api/api-path";
import { HttpResponse, http } from "msw";
import { mapMockData } from "../mock-data/map.mock";
import { delayForDevelopment } from ".";

export const mapHandlers = [
  http.get(API_PATH.marker, async ({ request }) => {
    const url = new URL(request.url);
    const label = url.searchParams.get("label");
    if (!label) {
      await delayForDevelopment();
      // console.log("MSW 핸들러 호출됨 (전체 데이터)");
      return HttpResponse.json(mapMockData);
    }
  }),
  http.get(API_PATH.marker, async ({ request }) => {
    const url = new URL(request.url);
    const label = url.searchParams.get("label");
    // console.log("MSW 핸들러 호출됨 (라벨 검색)", label);
    await delayForDevelopment();
    if (label) {
      const filteredData = mapMockData.filter((data) =>
        data.label.includes(label)
      );
      // console.log("필터링된 데이터:", filteredData);
      return HttpResponse.json(filteredData);
    }
  }),
];
