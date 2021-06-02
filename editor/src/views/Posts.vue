<template>
    <div class="bg-white w-1/2 flex-1 shadow flex flex-row">
        <PostCard :post="post"></PostCard>
    </div>
</template>

<script lang="ts" setup>
import PostCard from "@/components/PostCard.vue"

const post: Post = {
    title: "Hello, world",
    name: "hello",
    author: "Yarn",
    tags: ["测试", "test"],
    createTime: new Date(),
    lastUpdate: new Date(),
    content: "# Hello, world!"
}
</script>
