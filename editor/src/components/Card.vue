<template>
    <div class="shadow p-2">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const a = ref(0);
</script>
