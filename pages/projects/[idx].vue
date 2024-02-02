<script setup>
const { data } = await useAsyncData("data", () =>
  fetch("/api/Project").then((res) => res.json())
);
const route = useRoute();
const pData = data.value.data.find((item) => item.idx == route.params.idx);
</script>

<template>
  <v-container transition="scroll-x-transition">
    <v-btn icon="mdi-arrow-left" @click="$router.back()" />
    <div class="d-flex align-center flex-column">
      <CardDetailed :project="pData"></CardDetailed>
    </div>
  </v-container>
</template>
