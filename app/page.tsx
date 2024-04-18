import PokemonGrid from "@/components/pokemon-grid";
import Image from "next/image";
import PokemonCard from "@/components/pokemon-card";
import getPokemonList from "@/lib/pokemon-api";
export default async function Home() {

  const pokemonList = await getPokemonList()

  return (
      <PokemonGrid pokemonList={pokemonList}/>
  );
}
