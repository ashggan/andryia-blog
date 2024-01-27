<template>
    <div>
        <NuxtLink :to="localePath(`/posts/${post.id}`)">
            <div
                class="card card-side rounded-none border-b-2 mb-3 border-b-indigo-500 bg-gray-100 shadow-md hover:shadow-xl delay-200 duration-300 ">
                <div class="card-body">
                    <h2 class="card-title">{{ post.title }}</h2>
                    <p class="text-sm"> {{ $t('by') }} : <b class="text-indigo-500">{{ post.author }}</b> </p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import type { Post } from '~/types/post';
const localePath = useLocalePath()

const props = defineProps({
    post: {
        type: Object as () => Post,
        required: true
    }

})

</script>

 