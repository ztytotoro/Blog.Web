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
        <Button :primary="true" @click="submit">保存</Button>
        <Button class="ml-3" @click="cancel">取消</Button>
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
import { useRoute, useRouter } from "vue-router";
import { addPost } from "../fetch";
import { injectPost } from "../postStore";

const manager = injectPost()

const route = useRoute();

const post = route.params.postName ? manager.getByName(route.params.postName as string) : {} as Post

const form = reactive(post);

const submit = () => {
    addPost(toRaw(form)).then(() => manager.refresh()).then(cancel);
};

const router = useRouter();

const cancel = () => router.replace('/')
</script>
