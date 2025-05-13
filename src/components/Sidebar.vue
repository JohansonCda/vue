<template>
  <div class="sidebar">
    <h2>Bienvenid@</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Correo: {{ registrarStore.correo }}</h3>
    <ul>
      <li><router-link to="/contador">Contador</router-link></li>
      <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
      <li><router-link to="/registrar">Registro</router-link></li>
    </ul>
  </div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
const registrarStore = useRegistrarStore();

</script>

<style>
.sidebar {
  width: 200px;
  background-color: lightsteelblue;
  padding: 20px;
}
</style>
