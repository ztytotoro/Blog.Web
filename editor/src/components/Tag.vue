<template>
    <span
        class="text-sm bg-gray-600 text-white px-1 h-7 leading-7 rounded cursor-default flex items-center"
    >
        <slot></slot>
        <XIcon
            v-if="closeIcon"
            class="h-4 w-4 text-gray-300 hover:text-white cursor-pointer"
            @click="emit('close')"
        />
    </span>
</template>

<script lang="ts" setup>
//@ts-ignore
import { XIcon } from '@heroicons/vue/solid'
import { defineEmit, defineProps } from 'vue';

defineProps({
    closeIcon: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmit(["close"]);
</script>
