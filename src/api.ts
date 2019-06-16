///<reference path="../types/global.d.ts" />

import { fetch } from 'whatwg-fetch';

const baseUrl = 'https://cnodejs.org/api/v1/';

export function apiGetPosts() {
  return fetch(`${baseUrl}/topics`).then((res: any) => res.json());
}

export function apiGetPostDetail(id: string) {
  return fetch(`${baseUrl}/topic/${id}`).then((res: any) => res.json());
}
