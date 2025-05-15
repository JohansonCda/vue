import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlturaStore = defineStore('altura', () => {
  const altura = ref(0);
  const setAltura = (temp) => {
    altura.value = temp;
  };

  return { altura, setAltura };

});

