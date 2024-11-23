import { API_PATH } from '@/api/api-path';
import { HttpResponse, http } from 'msw';
import { storesData } from '../mock-data/stores.mock';
import { delayForDevelopment } from '.';

export const storeHandlers = [
  http.get(API_PATH.searchStore, async ({ request }) => {
    const url = new URL(request.url);
    const storeName = url.searchParams.get('name');
    const label = url.searchParams.get('label');

    if (!storeName && !label) {
      return HttpResponse.json(storesData);
    }

    const filteredData = storesData.filter(el => {
      if (label) {
        return el.labels.some(keyword => keyword === label);
      }

      if (storeName) {
        return el.name.includes(storeName);
      }
    });

    await delayForDevelopment();
    return HttpResponse.json(filteredData);
  }),
];
