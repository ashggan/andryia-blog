<template>
    <div class="flex flex-col  gap-y-7 py-5">
        <input type="text" v-model="post.title"
            class="w-full border-b-2 border-b-pink-500 rounded-none outline-none focus:outline-0 px-5 py-2 bg-transparent"
            placeholder="Title">
        <input type="text" v-model="post.author"
            class="w-full border-b-2 border-b-pink-500 rounded-none outline-none focus:outline-0 px-5 py-2 bg-transparent"
            placeholder="Author">
        <textarea
            class="w-full border-b-2 border-b-pink-500 rounded-none outline-none focus:outline-0 px-5 py-2 bg-transparent"
            placeholder="Body" v-model="post.body"></textarea>
        <div class="flex justify-between">
            <div class="btn" @click="add_post"> add</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import type { Post } from '~/types/post';

const newPost = {
    id: 0,
    title: '',
    author: '',
    body: ''
}

const store = useStore();

const post = ref<Post>(newPost)

const add_post = () => {
    if (post.value == newPost) alert('no')
    store.commit('ADD_POST', post.value)
    post.value = newPost
}

</script>

<style scoped></style>