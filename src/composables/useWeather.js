import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather";

export const useWeather = async () => {
  await esperar(0);
  const temperatura = await getTemperatura();
  const weatherStore = useWeatherStore();
  weatherStore.temperatura = temperatura;
};

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
