<template>
    <div :class="['container', 'p-5', locale === 'ar' ? 'text-right' : '']">
        <div class="flex justify-center ">
            <div class="md:w-9/12 flex flex-col gap-y-5" v-if="post">
                <h2 class="text-3xl">{{ post.title }}</h2>
                <p class="text-md font-bold">{{ post.author }}</p>
                <p class="text-sm">{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import type { Post } from '~/types/post';

const store = useStore();
const { locale } = useI18n()

const post = ref<Post | null>(null);
const { id } = useRoute().params as unknown as { id: number };

post.value = store.getters.getPostById(id, locale.value)


</script>