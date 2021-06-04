<template>
    <div class="shadow bg-white h-20 p-2">
        <span>{{ post.title }}</span>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, reactive } from "vue";

const props = defineProps<{
    post: Post
}>()

const post = reactive(props.post)
</script>
