import { axiosClient } from ".";
import { Benefit } from "../models";

export function getBenefits() {
  return axiosClient.get<Benefit[]>("/benefits");
}
