import React from "react";

const BASE_URL = "http://localhost:3000/api";

type MetodoHttp = "GET" | "POST";

export function useFetch() {
  const request = async (url: string, metodo: MetodoHttp) => {
    try {
      const response = await fetch(BASE_URL + url);
      const dados = await response.json();
      if (dados) {
        return dados;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { request };
}
