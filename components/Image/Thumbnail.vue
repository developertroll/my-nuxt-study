<script setup>
const props = defineProps({
  imgLink: { type: String, required: true },
  size: { type: Number, default: 125 },
});
</script>

<template>
  <v-img
    :src="imgLink"
    alt="image"
    cover
    aspect-ratio="16/9"
    :width="size"
  ></v-img>
</template>
