import { axiosClient } from ".";
import { City } from "../models";

export function getCitiesService() {
  return axiosClient.get<City[]>("/cities");
}
