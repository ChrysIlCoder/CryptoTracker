import axios, { AxiosRequestConfig } from "axios";

export interface IApiRequest {
  method?: "get" | "post" | "put" | "delete" | undefined;
  url: string;
  headers?: object | undefined;
  body?: any | undefined;
  withAuthToken?: boolean;
}

export async function fetcher({ ...props }: IApiRequest): Promise<any> {
  const API_KEY = 'CG-Nj42CFJj1T1EE9ccJjQ8AUU7'

  const options: AxiosRequestConfig = {
    method: props.method,
    baseURL: "https://api.coingecko.com/api/v3",
    url: props.url,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      'x-cg-demo-api-key': API_KEY,
      ...props.headers
    },
    data: props.body
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
}
