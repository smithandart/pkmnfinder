"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PokemonCard from "./pokemon-card";

interface PokemonGridProps {
    pokemonList: any;
}

export default function PokemonGrid({ pokemonList} : PokemonGridProps) {
    const [ searchText, setSearchText ] = useState("");

    const searchFilter = (pokemonList: any) => {
        if (searchText.toLowerCase() == 'pikachu') {
            setSearchText('I SAID DON\'T DO THAT')
        }
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList);

    return (
        <>
        <div>
            <h3 className="text-2xl w-max py-6 text-center">
                Search For A Pokemon!
            </h3>
            <div className="grid text-center mb-16 max-w-sm items-center gap-1.5">
                <Label className="text-center" htmlFor="pokemonName">
                    Pokemon Name
                </Label>
                <Input 
                    className="text-center"
                    type="text"
                    value={searchText}
                    autoComplete="off"
                    id="pokemonName"
                    placeholder="Don't enter Pikachu"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
            {filteredPokemonList.map((pokemon : any) => {
                return (
                    <PokemonCard name={pokemon.name}/>
                )
            })}
        </div>
        </>
    )
}