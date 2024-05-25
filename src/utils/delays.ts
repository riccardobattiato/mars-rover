import { randomDelay } from "./random";

export const simulateDelay = (): Promise<void> =>
  new Promise((resolve) => {
    const delay = randomDelay();
    setTimeout(() => {
      resolve();
    }, delay);
  });
