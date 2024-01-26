<template>
    <div class="container my-10 ">
        <div class="flex justify-center ">
            <div class="md:w-9/12 flex flex-col gap-y-5" v-if="post">
                <h2 class="text-3xl">{{ post.title }}</h2>
                <p class="text-md font-bold">{{ post.author }}</p>
                <p class="text-sm">{{ post.body }}</p>
            </div>
            <div class="md:w-9/12 flex flex-col gap-y-5" v-else>
                <!-- <h2 class="text-3xl">{{ error?.message }}</h2> -->
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onErrorCaptured, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import type { Post } from '~/types/post';

const store = useStore();

const post = ref<Post | null>(null);
const error = ref(null)
const { id } = useRoute().params as unknown as { id: number };

defineProps(['error'])

onMounted(async () => {
    post.value = await store.getters.getPostById(id)
});

// Function to handle the captured error
const handleError = (error: any) => {
    console.error(error);
};

onErrorCaptured(handleError);
</script>