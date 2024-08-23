import { jobFormSchema } from "./schema"
import { z } from "zod"

export type Job = z.infer<typeof jobFormSchema>
