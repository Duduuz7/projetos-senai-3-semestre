import axios from "axios";

// export const externalApiUrl = `https://viacep.com.br/ws`;
export const externalApiUrl = `http://localhost:3000/cep/`;

const api = axios.create({
  baseURL: externalApiUrl,
});

export default api;