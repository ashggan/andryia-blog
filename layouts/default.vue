<template>
    <div class="h-screen">
        <Navbar />

        <dialog id="my_modal_5" class="modal">
            <div class="modal-box">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <NewPostForm />
            </div>
        </dialog>
        <slot />
    </div>
</template>

<script setup lang="ts">

defineProps(['title'])
</script>

<style>
body {
    /* background: #fff; */
}
</style>

 