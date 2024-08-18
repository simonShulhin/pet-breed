export type BreedType = "cat" | "dog";

export interface Breed {
  id: string;
  name: string;
  image: string;
  description: string;
  type: BreedType;
}

export interface BreedFetchResponse extends Breed {
  reference_image_id: string;
  bred_for?: string;
}
