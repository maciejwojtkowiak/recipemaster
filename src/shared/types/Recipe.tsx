export enum typeOfFiltering {
  dishType,
  dishLength,
}

export type FilteringConfiguration = {
  content: string;
  type: typeOfFiltering;
  set: boolean;
};

export type Recipe = {
  id: number;
  username: string;
  title: string;
  type: string;
  time: string;
  description: string;
};
