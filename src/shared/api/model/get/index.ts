import { createEffect } from 'effector';

export const getFx = createEffect(async (link: string) => {
  return fetch(link)
    .then((response) => response.json())
    .then((response) => response);
});
