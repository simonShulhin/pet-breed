import { BreedFetchResponse, BreedType } from "./types";

export const BASE_DOG_URL = "https://api.thedogapi.com/v1";
export const BASE_CAT_URL = "https://api.thecatapi.com/v1";

export const fetchDogBreeds = async () => {
  const res = await fetchBreeds(`${BASE_DOG_URL}/breeds?limit=10`, "dog");
  return res;
};

export const fetchCatBreeds = async () => {
  const res = await fetchBreeds(`${BASE_CAT_URL}/breeds?limit=10`, "cat");
  return res;
};

export const fetchBreedByTypeAndId = async (type: BreedType, id: string) => {
  const url = type === "dog" ? `${BASE_DOG_URL}/breeds/${id}` : `${BASE_CAT_URL}/breeds/${id}`;

  const res = await fetchBreeds(url, type);
  return res;
};

const fetchBreeds = async (url: string, type: BreedType) => {
  const res = await fetch(url, { cache: "force-cache" });
  const resJson: BreedFetchResponse = await res.json();

  if (Array.isArray(resJson)) {
    const resWithImage = await Promise.all(
      resJson.map(async (el: BreedFetchResponse) => await getObjectResponse(el, type))
    );
    return resWithImage;
  }

  return await getObjectResponse(resJson, type);
};

const getObjectResponse = async (obj: BreedFetchResponse, type: BreedType) => {
  const image = await fetchBreedImage(obj.reference_image_id, type);
  return {
    id: obj.id,
    name: obj.name,
    image: image.url,
    description: obj.bred_for || obj.description,
    type,
  };
};

const fetchBreedImage = async (id: string, type: BreedType) => {
  const url = type === "dog" ? `${BASE_DOG_URL}/images/${id}` : `${BASE_CAT_URL}/images/${id}`;
  const res = await fetch(url);
  return res.json();
};
