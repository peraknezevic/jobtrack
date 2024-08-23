import { z } from "zod"

export const jobFormSchema = z.object({
  position: z.string().min(2).max(50),
  company: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  status: z.enum([
    "PENDING",
    "INTERVIEW",
    "DECLINED",
    "REJECTED",
    "NORESPONSE",
  ]),
  mode: z.enum(["FULLTIME", "PARTTIME", "INTERNSHIP"]),
  notes: z.string().min(2).max(200),
  dateApplied: z.date(),
  dateResponse: z.date(),
})
