<script setup>
// Projects는 포트폴리오들을 보여주는 페이지, 각각의 포트폴리오는 주소, 제목, 설명, 이미지, 태그들로 구성되어있다.
const { projects, loadProjects } = useProjects();
onMounted(() => {
  loadProjects();
});

useHead({
  title: "Projects",
});
</script>

<template>
  <v-container transition="scroll-x-transition">
    <h1 class="text-center">완성된 프로젝트들</h1>
    <div
      v-for="item in projects.data"
      :key="item.idx"
      class="d-flex align-center flex-column"
    >
      <CardBase :project="item"></CardBase>
      <br />
      <v-divider></v-divider>
      <br />
    </div>
  </v-container>
</template>
