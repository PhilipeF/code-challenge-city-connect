export interface Benefit {
  id: number;
  name: string;
}

export interface Job {
  id: number;
  logo: string;
  salary: number;
  profession: string;
  city: string;
  description: string;
  Benefits: Benefit[];
}
