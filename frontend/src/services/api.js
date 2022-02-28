import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/",
});

export const password = async () => {
  const { data } = await api.post(`password`, {
    name: "oi",
    test: "test",
  });
  return data;
};

export const create = async () => {
  const { data } = await api.post(`create`, {
    name: "oi",
    test: "test",
  });
  return data;
};

export const test = async () => {
  const { data } = await api.get(`test`);
  return data;
};
