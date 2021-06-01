<template>
    <div class="bg-white w-1/2 flex-1 shadow grid grid-cols-3 auto-rows-min">
        <span class="h-10 leading-10 px-2">123</span>
        <span class="h-10 leading-10 px-2">123</span>
        <span class="h-10 leading-10 px-2">123</span>
        <span class="h-10 leading-10 px-2">123</span>
        <span class="h-10 leading-10 px-2">123</span>
        <span class="h-10 leading-10 px-2">123</span>
        <span class="h-10 leading-10 px-2">123</span>
        <span class="h-10 leading-10 px-2">123</span>
        <Tag @close="onClose" closeIcon>123131</Tag>
    </div>
</template>

<script lang="ts" setup>
import Tag from "@/components/Tag.vue"

const onClose = () => {
    console.log("close")
}
</script>
