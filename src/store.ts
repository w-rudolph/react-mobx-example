import { observable, action, transaction } from 'mobx';
import { apiGetPostDetail, apiGetPosts } from './api';

export interface Post {
  id: string;
  title: string;
  content: string;
}

export class PostList {
  @observable list: Post[] = [];
  @observable isLoading = false;
  @action
  getPosts() {
    this.isLoading = true;
    return apiGetPosts().then((ret: any) => {
      transaction(() => {
        this.list = ret.data;
        this.isLoading = false;
      });
    });
  }
}

export class PostDetail {
  @observable detail = {} as Post;
  @observable isLoading = false;

  @action
  getPostDetail(id: string) {
    this.isLoading = true;
    return apiGetPostDetail(id).then((ret: any) => {
      transaction(() => {
        this.detail = ret.data;
        this.isLoading = false;
      });
    });
  }
}

export interface Store {
  postList: PostList;
  postDetail: PostDetail;
}

export const postList = new PostList();
export const postDetail = new PostDetail();
