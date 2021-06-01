<template>
  <input
    class="
      border-gray-300 border
      px-1
      text-sm
      h-8
      outline-none
      focus-within:border-blue-400
    "
    type="text"
    v-model="value"
  />
</template>

<script lang="ts" setup>
import { defineEmit, defineProps, ref, toRaw, watch } from "@vue/runtime-core";

const props = defineProps({
  modelValue: String,
});

const value = ref(props.modelValue);
const emit = defineEmit(["update:modelValue"]);

watch(value, () => {
  emit("update:modelValue", value.value);
});
</script>
