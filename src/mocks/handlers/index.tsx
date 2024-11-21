import { delay } from "msw";
import { mapHandlers } from "./map-handler.mock";
import { storeHandlers } from './store-handler.mock';
import { bookmarkHandler } from './bookmark-handler.mock';
export const delayForDevelopment = async (ms = 1000) => {
  if (process.env.NODE_ENV === "development") {
    await delay(ms);
  }
};
export const handlers = [...mapHandlers, ...storeHandlers, ...bookmarkHandler];