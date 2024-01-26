import { createStore } from "vuex";
import { data } from "assets/data.json";
import type { Post } from "~/types/post";

const store = createStore({
  state() {
    return {
      posts: data,
    };
  },
  mutations: {
    ADD_POST(state, post: Post) {
      post.id = state.posts.length + 1;
      state.posts = [post, ...state.posts];
      console.log(state.posts.length);
    },
  },
  getters: {
    getPostById: (state) => (id: string) => {
      const post_id = castToNumber(id);
      if (!post_id) {
        console.log("Post not found");
        // throw new Error("Post not found");
      }
      const post = state.posts.find((p) => p.id === post_id);
      if (!post) {
        console.log("Post not found");
        throw createError("Post not found");
      }
      return post;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
