
const POKEAPI = "https://pokeapi.co/api/v2/";

export default async function getPokemonList() {
    const response = await fetch(POKEAPI + "pokemon?limit=1025&offset=0");
    const data = await response.json();
    return data.results;
};

export async function getPokemon(name: string) {
    const response = await fetch(POKEAPI + "pokemon/" + name);
    const data = await response.json();
    return data;
};