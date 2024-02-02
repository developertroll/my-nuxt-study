<template>
  <v-card varian="outlined" transition="scroll-x-transition">
    <div class="text-center">
      <v-card-title>장태규의 포트폴리오 모음집</v-card-title>
    </div>
    <div>
      <v-expansion-panels variant="accordion" multiple>
        <v-expansion-panel
          title="소개"
          text="이 페이지는 제가 공부하면서 만들어본 간이 프로젝트/페이지 등을 모아놓은 페이지입니다. 현재 보고 계신 페이지는 Nuxt.js를 사용하여 만들었으며 Vuetify를 사용해 디자인을 구성하였습니다."
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="사용한 언어들"
          text="nodejs, vue, nuxt, javascript, typescript, html, scss"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="장기목표"
          text="react 및 nextjs를 사용해 쇼핑몰 구성하기, spring boot를 Restapi 처럼 사용해서 해당 react 페이지와 연동하기"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>
