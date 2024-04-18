<script setup lang="ts">
export interface Props {
  active: boolean,
  imgPath: string
}

withDefaults(defineProps<Props>(), {
  active: false,
})
</script>

<template>
  <div class="p-5 relative bg-gray-200 h-full w-full flex flex-col justify-center items-center shadow-xl rounded-md">
    <p class="text-xl font-semibold text-inherit text-center">
      <slot></slot>
    </p>
    <img
      :src="imgPath"
      class="mx-auto h-10"
      :class="{ 'animate-bounce animate-duration-2000 animate-count-infinite': active }"
    />
    <div
      v-if="!active"
      class="absolute w-full h-full rounded-md bg-white opacity-50"
    ></div>
  </div>
</template>