<template>
  <div class="not-found">
    404 Not Found
    <a-button class="primary" @click="$router.push('/')">Go Home</a-button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.not-found {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  font-size: 24px;
  color: #888;
}
</style>
