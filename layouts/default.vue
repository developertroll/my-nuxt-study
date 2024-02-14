<template>
  <v-layout>
    <!-- Header Tab 넣기 -->
    <v-app-bar title="포트폴리오 모음집" color="surface-variant">
      <v-btn to="/" nuxt>메인페이지</v-btn>
      <v-btn to="/projects" nuxt>프로젝트</v-btn>
      <!-- <v-switch label="다크모드"></v-switch> -->
    </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
  </v-layout>
</template>
