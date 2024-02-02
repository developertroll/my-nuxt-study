<script setup>
const props = defineProps({
  link: { type: String, required: true },
});
const linkObject = [
  {
    prop: "home",
    link: "/",
    text: "Home",
  },
  { prop: "project", link: "/projects", text: "프로젝트" },
  {
    prop: "about",
    link: "/about",
    text: "About",
  },
];

const link = linkObject.find((item) => item.prop === props.link);
if (!link) throw new Error("Invalid link prop");
</script>

<template>
  <div>
    <NuxtLink :to="link.link">{{ Link.text }}</NuxtLink>
  </div>
</template>
