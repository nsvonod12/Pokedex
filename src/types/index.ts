import { z } from 'zod' 
import { pokemonDetailsSchema, pokemonInfoSchema} from "../utils/poke-schema";

export type pokemonDetails = z.infer<typeof pokemonDetailsSchema>
export type pokemonInfo = z.infer<typeof pokemonInfoSchema>