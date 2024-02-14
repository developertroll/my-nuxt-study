<script setup>
const group = defineProps({
  tags: { type: Array, required: true },
});
</script>

<template>
  <v-chip-group>
    <ChipBasic v-for="tag in group.tags" :key="tag" :text="tag" />
  </v-chip-group>
</template>
