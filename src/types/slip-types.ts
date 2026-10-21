import { z } from "zod";

export const SlipSchema = z.object({
  id: z.number(),
  advice: z.string()
})

export type Slip = z.infer<typeof SlipSchema>;