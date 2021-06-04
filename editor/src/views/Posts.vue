<template>
    <div class="w-1/2 flex-1 flex flex-col p-5 space-y-3">
        <div>
            <Button @click="toAdd">添加</Button>
        </div>
        <PostCard v-for="post in posts" :post="post" :key="post.id" @click="enterPost(post)"></PostCard>
    </div>
</template>

<script lang="ts" setup>
import PostCard from "@/components/PostCard.vue"
import Button from "@/components/Button.vue"
import { useRouter } from "vue-router";
import { injectPost } from "../postStore";

const { posts } = injectPost();
const router = useRouter()

const toAdd = () => router.push('/editor')
const enterPost = (post: Post) => router.push({
    name: 'editor',
    params: {
        postName: post.name
    }
})
</script>
