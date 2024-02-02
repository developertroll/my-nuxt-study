<script setup>
const count = useCounter();

const response = await $fetch("/api/Hello");
console.log(response);
</script>

<template>
  <div>
    <h1>Count: {{ count }}</h1>
    <button @click="count++">Increment</button>
    <button @click="count--">Decrement</button>
  </div>
</template>
