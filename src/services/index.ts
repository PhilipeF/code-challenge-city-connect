import axios from "axios";
export const axiosClient = axios.create({ baseURL: "http://localhost:3005" });

export * from "./cities.service";
export * from "./jobs.service";
export * from './benefits.service';
