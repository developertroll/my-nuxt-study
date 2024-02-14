<script setup>
const tag = defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <v-chip>
    {{ tag.text }}
  </v-chip>
</template>
