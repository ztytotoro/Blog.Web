<template>
    <Card class="w-2/3 mx-auto my-auto space-y-3">
        <div>
            <span>名称</span>
            <input v-model="form.name" />
        </div>
        <div>
            <span>标题</span>
            <input v-model="form.title" />
        </div>
        <div>
            <span>标签</span>
            <input v-model="form.tags" />
        </div>
        <button>保存</button>
    </Card>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue"
import { reactive } from "@vue/reactivity";

const form = reactive({
    name: "",
    title: "",
    tags: ""
})
</script>

