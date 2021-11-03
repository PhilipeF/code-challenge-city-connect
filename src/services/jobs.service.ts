import { axiosClient } from ".";
import { Job } from "../models";

export function getJobsService() {
  return axiosClient.get<Job[]>("/jobs");
}
