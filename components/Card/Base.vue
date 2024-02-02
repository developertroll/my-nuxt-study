<script setup>
const props = defineProps({
  project: Object,
});
</script>

<template>
  <v-card variant="elevated" hover width="50%">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          {{ project.title }}
        </v-card-title>
        <v-card-subtitle>{{ project.description }}</v-card-subtitle>
        <v-card-actions>
          <v-btn :to="`/projects/${project.idx}`" nuxt>상세</v-btn>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" size="125" rounded="0">
        <ImageThumbnail :imgLink="project.imgLink"></ImageThumbnail>
      </v-avatar>
    </div>
  </v-card>
</template>
