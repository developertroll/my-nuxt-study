<script setup>
const props = defineProps({
  project: Object,
});
</script>

<template>
  <v-card
    variant="elevated"
    hover
    width="50%"
    link
    :to="`/projects/${project.idx}`"
    nuxt
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          {{ project.title }}
        </v-card-title>
        <v-card-subtitle>{{ project.description }}</v-card-subtitle>
      </div>
      <v-avatar
        class="ma-3"
        size="125"
        rounded="0"
        v-if="project.imgLink !== 'placeholder'"
      >
        <ImageThumbnail :imgLink="project.imgLink"></ImageThumbnail>
      </v-avatar>
      <div v-else>
        <v-avatar class="ma-3" size="125" rounded="0">
          <v-icon>mdi-image-broken-variant</v-icon>
        </v-avatar>
        <br />
        이 프로젝트는 미완성입니다.
      </div>
    </div>
    <v-divider />
    <div class="ma-3">
      <ChipGroup :tags="project.tags" />
    </div>
  </v-card>
</template>
