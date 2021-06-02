<template>
    <Card class="w-1/2 mx-auto my-auto space-y-3">
        <div>
            <Label>名称</Label>
            <Input v-model="form.name" />
        </div>
        <div>
            <Label>标题</Label>
            <Input v-model="form.title" />
        </div>
        <div>
            <Label>作者</Label>
            <Input v-model="form.author" />
        </div>
        <div>
            <Label>标签</Label>
            <TagInput v-model="form.tags" />
        </div>
        <Monaco class="h-96 w-full border py-3" v-model="form.content"></Monaco>
        <Button @click="submit">保存</Button>
    </Card>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
import Input from "@/components/Input.vue";
import Label from "@/components/Label.vue";
import Button from "@/components/Button.vue";
import Monaco from "@/components/Monaco.vue";
import TagInput from "@/components/TagInput.vue";
import { reactive, toRaw } from "vue";

const form = reactive<Post>({
    title: "Hello, world",
    name: "hello",
    author: "Yarn",
    tags: ["测试", "test"],
    createTime: new Date(),
    lastUpdate: new Date(),
    content: "# Hello, world!"
});

const submit = () => {
    console.log(toRaw(form));
};
</script>
