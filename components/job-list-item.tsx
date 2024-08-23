import { Job } from "@/lib/types"
import { format } from "date-fns"
const JobListItem = ({ job }: { job: Job }) => {
  return (
    <div>
      <h3>{job.position}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.status}</p>
      <p>{job.mode}</p>
      <p>{job.notes}</p>
      <p>{format(job.dateApplied, "yyyy-MM-dd")}</p>
      <p>{job.dateResponse && format(job.dateResponse, "yyyy-MM-dd")}</p>
    </div>
  )
}

export default JobListItem
