import { createEvent, createStore } from "effector";

const set = createEvent<boolean>();

const $state = createStore<boolean>(false)
  .on(set, (_, newState) => newState);

export { $state, set };
