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
    <Monaco class="h-96 w-full border py-3"></Monaco>
    <Button @click="submit">保存</Button>
  </Card>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
import Input from "@/components/Input.vue";
import Label from "@/components/Label.vue";
import Button from "@/components/Button.vue";
import Monaco from "@/components/Monaco.vue";
import { reactive, toRaw } from "@vue/reactivity";

const form = reactive({
  name: "111",
  title: "",
  tags: "",
});

const submit = () => {
  console.log(toRaw(form));
};
</script>
