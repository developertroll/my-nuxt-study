<script setup>
const { data } = await useAsyncData("data", () =>
  fetch("/api/Project").then((res) => res.json())
);
const route = useRoute();
const pData = data.value.data.find((item) => item.idx == route.params.idx);
</script>

<template>
  <!-- <div>Hello world! This is {{ data }} Project page.</div> -->
  <v-btn icon="mdi-arrow-left" @click="$router.back()" />
  <div class="d-flex align-center flex-column">
    <CardDetailed :project="pData"></CardDetailed>
  </div>
</template>
