import { delay } from "msw";
import { mapHandlers } from "./map-handler.mock";
import { authHandlers } from "./auth-handler.mock";
import { storeHandlers } from "./store-handler.mock";
import { bookmarkHandler } from "./bookmark-handler.mock";
import { restaurantHandler } from "./restaurant-handler.mock";
import { reviewHandler } from './review-handler.mock';

export const delayForDevelopment = async (ms = 1000) => {
  if (process.env.NODE_ENV === "development") {
    await delay(ms);
  }
};

export const handlers = [
  ...mapHandlers,
  // ...authHandlers,
  // ...storeHandlers,
  ...bookmarkHandler,
  ...restaurantHandler,
  ...reviewHandler
];
