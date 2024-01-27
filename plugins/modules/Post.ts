import type { Post, PostStateType } from "~/types/post";
import { data } from "~/assets/posts.json";

const postModule = {
  namespaced: true,

  state() {
    return {
      posts: data,
    };
  },
  mutations: {
    ADD_POST(state: PostStateType, post: Post) {
      if (post.lang == "en") {
        post.id = state.posts.en.length + 1;
        state.posts.en = [post, ...state.posts.en];
      } else {
        post.id = state.posts.ar.length + 1;
        state.posts.ar = [post, ...state.posts.ar];
      }
    },
  },
  getters: {
    getPostById: (state: PostStateType) => (id: string, lang: string) => {
      const post_id = castToNumber(id);
      const posts = lang === "en" ? state.posts.en : state.posts.ar;
      if (!post_id) {
        throw new Error("Post not found");
      }
      const post = posts.find((p) => p.id === post_id);
      if (!post) {
        console.log("Post not found");
        throw createError("Post not found");
      }
      return post;
    },
    getAll: (state: PostStateType) => (lang: string) => {
      return lang === "en" ? state.posts.en : state.posts.ar;
    },
  },
};

export default postModule;
