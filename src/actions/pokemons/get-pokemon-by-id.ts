import { pokeApi } from "../../config/api/pokeApi"
import { Pokemon } from "../../domain/entities/pokemon"
import { PokeAPIPokemon } from "../../infrastructure/interfaces/pokeApi.interface"
import { POkemonMapper } from "../../infrastructure/mappers/pokemon.mapper"

export const getPOkemonById = async (id: number):Promise <Pokemon> => {
    try {
        const {data} = await pokeApi.get<PokeAPIPokemon>(`/pokemon/${id}`)

        const pokemon = await POkemonMapper.pokeApiPokemonToEntity(data)

        return pokemon

    } catch (error) {
        throw new Error(`Error getting pokemon by id ${id}`)
    }
}