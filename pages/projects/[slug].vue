<template>
  <div>
    <h1>Project {{ slug }}</h1>
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
</script>

<style scoped></style>
