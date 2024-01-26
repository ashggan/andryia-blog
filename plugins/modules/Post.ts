import type { Post, PostStateType } from "~/types/post";
// import { data } from "~/assets/data.json";
import { data_ar } from "~/assets/data-ar.json";
// import { getLocaleCode } from "~/utils/helpers";

// const { locale } = useI18n();
// const code = getLocaleCode(locale);

const postModule = {
  namespaced: true,

  state() {
    return {
      posts: data_ar,
    };
  },
  mutations: {
    ADD_POST(state: PostStateType, post: Post) {
      post.id = state.posts.length + 1;
      state.posts = [post, ...state.posts];
    },
  },
  getters: {
    getPostById: (state: PostStateType) => (id: string) => {
      const post_id = castToNumber(id);
      if (!post_id) {
        throw new Error("Post not found");
      }
      const post = state.posts.find((p) => p.id === post_id);
      if (!post) {
        console.log("Post not found");
        throw createError("Post not found");
      }
      return post;
    },
    getAll: (state: PostStateType) => state.posts,
  },
  actions: {
    fetchContent: (state: Post) => {},
  },
};

export default postModule;
