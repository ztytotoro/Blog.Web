<template>
  <div ref="editor"></div>
</template>

<script lang="ts" setup>
import { defineEmit, defineProps, onMounted, ref } from "vue";
import * as monaco from "monaco-editor";
import "@/monaco-worker";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmit(["update:modelValue"]);

const editor = ref<HTMLDivElement>();

onMounted(() => {
  if (editor.value) {
    const instance = monaco.editor.create(editor.value, {
      value: props.modelValue,
      language: "markdown",
      minimap: {
        enabled: false,
      },
      lineNumbers: "off",
      smoothScrolling: true,
      automaticLayout: true
    });

    instance.onDidChangeModelContent(_ => {
      emit('update:modelValue', instance.getValue())
    })
  }
});
</script>