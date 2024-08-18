import { fetchCatBreeds, fetchDogBreeds } from "./api";
import type { Breed } from "./types";
import Breeds from "./components/Breeds";

async function getBreeds() {
  const dogBreeds = (await fetchDogBreeds()) as Breed[];
  const catBreeds = (await fetchCatBreeds()) as Breed[];

  return [...dogBreeds, ...catBreeds];
}

const Home = async () => {
  const breeds: Breed[] = await getBreeds();

  return <Breeds breeds={breeds} />;
};

export default Home;
