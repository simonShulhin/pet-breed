import Link from "next/link";
import React from "react";
import Image from "next/image";
import type { Breed } from "../types";

const BreedCard = ({ name, image, id, type }: Breed) => {
  return (
    <Link href={`/${type}/${id}`} className="card-container">
      <div className="flex-1 relative">
        <Image src={image} alt={name} objectFit="cover" fill />
      </div>
      <p className="text-center">{name}</p>
    </Link>
  );
};

export default BreedCard;
