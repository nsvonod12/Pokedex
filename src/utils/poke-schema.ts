import { z } from 'zod'

export const pokemonDetailsSchema = z.object({
    id: z.number(),
    name: z.string(),
    height: z.number(),
    weight: z.number(),
    sprites: z.object({
        other: z.object({
            dream_world: z.object({
                front_default: z.string()
            })
        })
    }),
    types: z.array(
        z.object({
            type: z.object({
                name: z.string()
            })
        })
    ) ,
    stats: z.array(
        z.object({
            base_stat: z.number(),
            stat: z.object({
                name: z.string(),
            })    
        })
    ),
})

export const pokemonInfoSchema = z.object({
    height: z.number(),
    stats: z.array(
        z.object({
            base_stat: z.number(),
            stat: z.object({
                name: z.string(),
            })    
        })
    ),
    weight: z.number()
})