<template>
    <div :class="['container', 'p-5', locale === 'ar' ? 'text-right' : '']">
        <!-- posts : {{ posts.length }} -->
        <div class="grid md:grid-cols-3 gap-3">
            <Card v-for="post  in posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import type { Post } from '~/types/post';

const store = useStore();
const posts = ref<Post[]>([])
const { locale } = useI18n()

posts.value = store.getters.getAll(locale.value)


</script>