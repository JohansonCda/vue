import { useAlturaStore } from "@/stores/alturaStore";
import { getAltura } from "@/helpers/getAltura";

export const useAltura = async () => {
  const altura = await getAltura();
  const alturaStore = useAlturaStore();
  alturaStore.altura = altura;
};
