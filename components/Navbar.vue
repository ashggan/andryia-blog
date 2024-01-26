<template>
    <div class="navbar  border-b-2 border-b-indigo-700 z-100 shadow-lg mb-24">
        <div class="container ">
            <div class="flex-1">
                <div class="flex-1">
                    <NuxtLink class="btn btn-ghost text-xl" :to="localePath('/')">
                        {{ $t('nav_title') }}
                    </NuxtLink>
                </div>
            </div>
            <div class=" flex-none gap-x-3">
                <ul class="menu menu-horizontal  ">
                    <li>
                        <div class="bg-indigo-700 hover:bg-gray-700  text-white" onclick="my_modal_5.showModal()">
                            {{ $t('add_post_btn') }}
                        </div>
                    </li>
                    <LangSwitch />
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

</script>
