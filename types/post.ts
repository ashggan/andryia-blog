export interface Post {
  id: number;
  title: string;
  author: string;
  body: string;
  lang?: string;
}

export interface PostState {
  posts: Post[];
}

export interface PostStateType {
  posts: PostType;
}
export interface PostType {
  en: Post[];
  ar: Post[];
}
