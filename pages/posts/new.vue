<template>
    <div class="container my-10 ">
        <div class="flex justify-center ">
            <div class="md:w-9/12 flex flex-col gap-y-5">
                <div :class="`alert ${errMsg ? 'visible' : 'hidden'}`">
                    {{ errMsg }}
                </div>
                <input type="text" v-model="post.title"
                    class="w-full border-b-2 border-b-indigo-500 rounded-none outline-none focus:outline-0 px-5 py-2 bg-transparent"
                    :placeholder="$t('modal_title')">
                <input type="text" v-model="post.author"
                    class="w-full border-b-2 border-b-indigo-500 rounded-none outline-none focus:outline-0 px-5 py-2 bg-transparent"
                    :placeholder="$t('modal_author')">
                <textarea
                    class="w-full border-b-2 border-b-indigo-500 rounded-none outline-none focus:outline-0 px-5 py-2 bg-transparent"
                    :placeholder="$t('modal_body')" v-model="post.body"></textarea>
                <div class="flex justify-center ">
                    <div class=" py-3 px-5 rounded-md bg-indigo-500 hover:cursor-pointer text-white" @click="add_post"> {{
                        $t('add_post_modal_btn') }}
                    </div>
                </div>
            </div>
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
const errMsg = ref('')

const add_post = () => {
    const { title, author, body } = post.value
    if (!title || !author || !body) {
        errMsg.value = "Please fill all fields"
        return
    }
    else {
        store.commit('ADD_POST', post.value)
        useRouter().push("/")
    }
}

</script>