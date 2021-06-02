<template>
    <button
        class="focus:outline-none text-sm px-3 py-1.5 rounded shadow"
        :class="primary ? ['bg-blue-500', 'text-white'] : ['bg-white']"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
    primary: {
        type: String,
        default: false
    }
})
</script>
