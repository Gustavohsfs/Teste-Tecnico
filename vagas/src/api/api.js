import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/repos",
});

export const apiVagas = async () => {
  return api.get("/backend-br/vagas/issues");
};

export const apiVagasPage = async () => {
  return api.get("/backend-br/vagas/issues?per_page=100");
};


//page=2&q=is%3Aissue+is%3Aopen