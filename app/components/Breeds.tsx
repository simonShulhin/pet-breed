"use client";

import React, { useState } from "react";
import { Breed } from "../types";
import BreedCard from "./BreedCard";

const Breeds = ({ breeds }: { breeds: Breed[] }) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <main className="container mx-auto p-4">
      <div className="relative">
        <input
          type="search"
          id="search-input"
          placeholder="Search breed"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchInput.length > 0 && filteredBreeds.length > 1 && (
          <ul className="suggestions-list">
            {filteredBreeds.map((breed) => (
              <li
                key={breed.id}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => setSearchInput(breed.name)}>
                {breed.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="breeds-container">
        {filteredBreeds.map((breed) => (
          <BreedCard key={breed.id} {...breed} />
        ))}
      </div>
    </main>
  );
};

export default Breeds;
