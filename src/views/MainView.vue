<template>
  <Header :mensaje="texto"></Header>
  <div class="container">
    <Sidebar></Sidebar>
    <div class="content">
      <input type="text" v-model="texto">
      {{ texto }}
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const texto = ref('');
</script>

<style>
.container {
  display: flex;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
