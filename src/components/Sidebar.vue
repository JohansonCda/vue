<template>
  <div class="sidebar">
    <h2>Bienvenid@</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Correo: {{ correo }}</h3>
    <ul>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
      <li><router-link to="/registrar">Registro</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import { ref, watch } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre);
const correo = ref(registrarStore.correo);

watch(() => registrarStore.nombre, (newValue => {
  nombre.value = newValue
}));

watch(() => registrarStore.correo, (newValue => {
  correo.value = newValue
}));
</script>

<style>
.sidebar {
  width: 200px;
  background-color: aquamarine;
  padding: 20px;
}
</style>
