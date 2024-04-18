import PokemonImage from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemon-api";



export default async function PokemonPage({ params } : { params : { pokemon: string} }) {
    const { pokemon } = params;

    const pokemonObject = await getPokemon(pokemon);

    const spriteURL = pokemonObject.sprites.other['official-artwork'].front_default;
    return (
        <>
        <h1 className="text-4xl text-bold pt-4">
            { pokemon.toUpperCase() }
        </h1>
        <div className="m-4" style={{position: "relative", width: "300px", height: "300px"}}>
            <PokemonImage 
                image={spriteURL} 
                name={pokemon.toUpperCase()}
            />
        </div>
        <div className="flex-col lg:grid-cols-2">
            {pokemonObject.types.map( (typesObject: any) => {
                return (
                    <div className="flex">
                        {typesObject.type.name.toUpperCase()}
                    </div>
                )
            })}
        </div>
        <div>
            {pokemonObject.stats.map( (statsObject: any) => {
                const statName = statsObject.stat.name.toUpperCase();
                const statValue = statsObject.base_stat;
                
                return (
                    <div className="flex items-stretch" style={{width: "500px"}} key={statName}>
                        <h3 className="p-3 w-2/4">
                            {statName}: {statValue}
                        </h3>
                        <Progress className="w-2/4 m-auto" value={statValue/255*100}/>
                    </div>
                )
            })}
        </div>
        
        </>
    )
}