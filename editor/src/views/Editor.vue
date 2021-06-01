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
      <Label>标签</Label>
      <Input v-model="form.tags" />
    </div>
    <div class="h-96 w-full border py-3" ref="editor"></div>
    <Button @click="submit">保存</Button>
  </Card>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
import Input from "@/components/Input.vue";
import Label from "@/components/Label.vue";
import Button from "@/components/Button.vue";
import { reactive, ref, toRaw } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import * as monaco from "monaco-editor";
import "@/monaco-worker";

const form = reactive({
  name: "111",
  title: "",
  tags: "",
});

const submit = () => {
  console.log(toRaw(form));
};

const editor = ref<HTMLDivElement>();

onMounted(() => {
  if (editor.value) {
    monaco.editor.create(editor.value, {
      value: "# Hello, world!",
      language: "markdown",
      minimap: {
        enabled: false,
      },
      lineNumbers: "off",
      smoothScrolling: true,
      automaticLayout: true
    });
  }
});
</script>
