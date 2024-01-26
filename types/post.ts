export interface Post {
  id: number;
  title: string;
  author: string;
  body: string;
}

export interface PostState {
  posts: Post[];
}

export interface PostStateType {
  posts: Post[];
}
