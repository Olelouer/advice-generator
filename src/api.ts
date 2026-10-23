import { z } from "zod";
import { SlipSchema, type Slip } from "./types/slip-types";

const apiUrl = "https://api.adviceslip.com/advice";

export const getRandomAdvice = async (): Promise<Slip | null> => {
    try {
        const response = await fetch(apiUrl, { cache: "no-store" });
        if(!response.ok) {
            throw new Error('Statut de la réponse : ' + response.status);
        }
        const result = await response.json();

        const advice = SlipSchema.parse(result.slip);
        return advice;
    } catch (error: unknown) {
        if(error instanceof z.ZodError) {
            console.error('La validation du schéma a échouée', error.issues);
        } else if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('Erreur lors de la récupération du conseil');
        }
        return null;
    }
}