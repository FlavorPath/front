import { delay } from "msw";
import { mapHandlers } from "./map-handler.mock";
import { authHandlers } from './auth-handler.mock';
export const delayForDevelopment = async (ms = 1000) => {
  if (process.env.NODE_ENV === "development") {
    await delay(ms);
  }
};
export const handlers = [...mapHandlers, ...authHandlers];
