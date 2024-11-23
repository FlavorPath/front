import { API_PATH } from '@/api/api-path';
import { http, HttpResponse } from 'msw';
import { storesData } from '../mock-data/stores.mock';
import { delayForDevelopment } from '.';

export const bookmarkHandler = [
  http.get(API_PATH.scraps, async () => {
    const filteredData = storesData.filter(el => el.isBookmarked);
    await delayForDevelopment();
    return HttpResponse.json(filteredData);
  }),
  http.delete(API_PATH.scraps, async ({ request }: { request: Request }) => {
    const body: { restaurantId: number } = await request.json();
    storesData.forEach(el => {
      if (el.restaurantId === body.restaurantId) {
        el.isBookmarked = !el.isBookmarked;
      }
    });
    return HttpResponse.json({ success: true });
  }),
];