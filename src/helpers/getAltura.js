import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=3.4372&longitude=-76.5225&current=temperature_2m&timezone=auto&forecast_days=1';

export const getAltura = async () => {

  const respuesta = await axios.get(API_URL);
  console.log("Altura");
  const nuevaAltura = respuesta.data.current.temperature_2m;
  return nuevaAltura;
};
