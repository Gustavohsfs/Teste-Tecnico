import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/repos",
});

export const apiVagas = async () => {
  return api.get("/backend-br/vagas/issues");
};

