<script setup>
const route = useRoute();
console.log(route.params.id);
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    user id: {{ $route.params.id }}
    <AlertSuccess />
    <AlertError />
  </div>
</template>
