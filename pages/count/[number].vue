<script setup>
const count = useCounter();
const route = useRoute();
console.log(route.params.number);
</script>

<template>
  <div>
    number: {{ $route.params.number }}
    <h1>Count: {{ count }}</h1>
  </div>
</template>
