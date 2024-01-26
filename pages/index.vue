<template>
    <div class="container p-5">
        <!-- posts : {{ posts.length }} -->
        <div class="grid md:grid-cols-3 gap-3">
            <Card v-for="post in store.state.posts" :key="post.id" :post="post" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

</script>