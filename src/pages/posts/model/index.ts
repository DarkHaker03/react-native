import { createEvent, createStore } from "effector";


export type AddressArguments = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  }
}

export type UserArguments = {
  id: string,
  name: string,
  username: string,
  email: string,
  address: AddressArguments,
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  }
}

export type PostArguments = {
  userId: string,
  id: string,
  title: string,
  body: string,
}

export type ImgArguments = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}


export const setUsers = createEvent<UserArguments[]>();
export const setPosts = createEvent<PostArguments[]>();
export const setPhotos = createEvent<ImgArguments[]>();

export const $users = createStore<UserArguments[]>([]);
export const $posts = createStore<PostArguments[]>([]);
export const $photos = createStore<ImgArguments[]>([]);

$users.on(setUsers, (_, newState) => newState);
$posts.on(setPosts, (_, newState) => newState);
$photos.on(setPhotos, (_, newState) => newState);
