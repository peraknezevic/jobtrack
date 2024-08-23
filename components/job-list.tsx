"use client"

import JobListItem from "./job-list-item"
import { jobFormSchema } from "@/lib/schema"
import { useLocalStorage } from "usehooks-ts"
import { z } from "zod"

const JobList = () => {
  const [jobs, setJob, removeJob] = useLocalStorage<
    z.infer<typeof jobFormSchema>[]
  >("jobtrack-jobs", [], { initializeWithValue: false })

  return (
    <div>
      <h1>Job List</h1>
      {jobs.map((job) => (
        <JobListItem key={job.position} job={job} />
      ))}
    </div>
  )
}

export default JobList
