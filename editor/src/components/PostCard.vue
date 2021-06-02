<template>
<div>
    <span>{{post.title}}</span>
</div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
    post: Post
}>({
    post: {
        type: Object,
        default: null
    }
})
</script>