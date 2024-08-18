import React from "react";
import { fetchBreedByTypeAndId } from "../api";
import type { Breed, BreedType } from "../types";
import Image from "next/image";

const Breed = async ({ params }: { params: { breed: string[] } }) => {
  const [type, id] = params?.breed as [BreedType, string];
  const breed = (await fetchBreedByTypeAndId(type, id)) as Breed;

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl">{breed.name}</h1>
      <div className="relative max-w-full h-[80vh]">
        <Image src={breed.image} alt={breed.name} fill objectFit="contain" />
      </div>
      <p className="text-xl">{breed.description}</p>
    </div>
  );
};

export default Breed;
