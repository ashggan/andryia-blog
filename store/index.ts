// store/posts.ts
import { type Module } from "vuex";
import type { Post } from "~/types/post";

interface PostsState {
  posts: Post[];
}

const postsModule: Module<PostsState, any> = {
  state: () => ({
    posts: [],
  }),
  mutations: {
    addPost(state, post: Post) {
      state.posts.push(post);
    },
    removePost(state, postId: number) {
      state.posts = state.posts.filter((post) => post.id !== postId);
    },
  },

  getters: {
    // Your getters
  },
};

export default postsModule;
