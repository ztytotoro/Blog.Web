<template>
  <div ref="editor"></div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import * as monaco from "monaco-editor";
import "@/monaco-worker";

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