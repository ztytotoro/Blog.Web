<template>
    <div class="shadow-xl p-3 bg-white rounded">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const a = ref(0);
</script>
