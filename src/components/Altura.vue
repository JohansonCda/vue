<template>
  <h3>La Altura actual es: {{ alturaStore.altura }} °</h3>
</template>

<script setup>
import { useAltura } from '../composables/useAltura';
import { onMounted } from 'vue';
import { useAlturaStore } from '@/stores/alturaStore';

const alturaStore = useAlturaStore();

onMounted(() => {
  useAltura();
});
</script>

<style></style>
