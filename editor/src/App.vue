<template>
  <div
    class="
      h-screen
      w-screen
      bg-gray-100
      p-5
      flex flex-col
      items-center
      justify-center
    "
  >
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { providePost } from "./postStore";

providePost();
</script>
