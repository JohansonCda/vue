<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="nombre">Nombre: </label>
        <Field v-model="nombre" name="nombre" type="text" placeholder="ingrese su nombre" id="nombre" />
        <ErrorMessage name="nombre" />
      </div>
      <div class="form">
        <label for="correo">Correo: </label>
        <Field v-model="correo" name="correo" type="correo" placeholder="ingrese su correo" id="correo" />
        <ErrorMessage name="correo" />
      </div>

      <div class="form">
        <button type="submit">Registrar</button>
      </div>

    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegistrarStore } from '../stores/registrarStore';
import { ref } from 'vue';

const registrarStore = useRegistrarStore();
const nombre = ref('');
const correo = ref('');

const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, correo.value);
  console.log("Se ha enviado el formulario");
};

</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>
