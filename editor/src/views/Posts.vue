<template>
    <div class="bg-white w-1/2 flex-1 shadow flex flex-col p-5">
        <div>
            <Button @click="toAdd">添加</Button>
        </div>
        <PostCard v-for="post in posts" :post="post" :key="post.id"></PostCard>
    </div>
</template>

<script lang="ts" setup>
import PostCard from "@/components/PostCard.vue"
import Button from "@/components/Button.vue"
import { usePosts } from "../fetch";
import { useRouter } from "vue-router";

const { posts, refresh } = usePosts();
const router = useRouter()

const toAdd = () => router.push('/editor')
</script>
