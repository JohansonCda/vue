<template>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from 'vue-router';
</script>´

<style>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
