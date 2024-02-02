<script setup>
const props = defineProps({
  project: Object,
});

const openLink = (link) => {
  window.open(link, "_blank");
};
</script>

<template>
  <v-card variant="elevated" width="75%">
    <ImageThumbnail :imgLink="project.imgLink" size="600"></ImageThumbnail>
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title class="text-h5">
          {{ project.title }}
        </v-card-title>
        <v-card-subtitle class="text-wrap">{{
          project.detail
        }}</v-card-subtitle>
      </div>
    </div>
    <v-card-actions>
      <v-btn @click="openLink(project.link)">링크(새창으로 열립니다)</v-btn>
    </v-card-actions>
  </v-card>
</template>
