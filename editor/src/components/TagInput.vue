<template>
    <div class="border flex space-x-1 p-1">
        <Tag closeIcon @close="remove(tag)" v-for="tag in tags" :key="tag">{{ tag }}</Tag>
        <input class="outline-none" type="text" @keyup.enter="add(inputValue)" v-model="inputValue" />
    </div>
</template>

<script lang="ts" setup>
import Tag from "@/components/Tag.vue"
import { ref, computed, defineProps, defineEmit, watch } from "vue";
const props = defineProps({
    modelValue: Array,
});
const tagSet = ref(new Set<string>(props.modelValue as string[] || []))
const inputValue = ref("")
const tags = computed(() => Array.from(tagSet.value))

const remove = (tag: string) => tagSet.value.delete(tag)

const add = (tag?: string) => tag && tagSet.value.add(tag) && (inputValue.value = "")

const emit = defineEmit(["update:modelValue"]);

watch(tags, () => {
    emit("update:modelValue", tags.value);
});
</script>
