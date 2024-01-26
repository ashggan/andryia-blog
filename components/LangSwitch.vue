<template>
    <li>
        <details>
            <summary>
                {{ $t('lang_switch') }}
            </summary>
            <ul class="p-2-100 rounded-t-none bg-white shadow-lg">
                <li>
                    <a href="#" v-for="locale in locales" :key="(typeof locale === 'object' ? locale.code : locale)"
                        @click.prevent.stop="setLocale(getLocaleCode(locale))">{{ getLocaleName(locale) }}</a>
                </li>
            </ul>
        </details>
    </li>
</template>

<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables';

const { locale, locales, setLocale } = useI18n()

const getLocaleCode = (loc: string | LocaleObject) => typeof loc === 'object' ? loc.code : loc;


const getLocaleName = (loc: string | LocaleObject) => typeof loc === 'object' ? loc.name : loc;

</script>

 