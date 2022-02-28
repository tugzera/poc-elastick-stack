import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3333/" });

export const password = async () => {
  await api.post(`password`, {
    name: "oi",
    test: "test",
  });
};

export const create = async () => {
  await api.post(`create`, {
    name: "oi",
    test: "test",
  });
};

export const test = async () => {
  await api.get(`test`);
};
