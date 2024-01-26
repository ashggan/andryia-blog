<template>
    <div class="container h-screen ">
        <div class="flex flex-col gap-y-5 justify-center items-center h-full ">
            <div class="text-3xl font-bold capitalize">{{ error.message }}</div>
            <p>{{ error.statusCode }}</p>
            <p>
                <NuxtLink to="/">Back to home</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['error'])
</script>

<style scoped></style>