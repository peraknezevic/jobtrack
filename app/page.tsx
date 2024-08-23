import Image from "next/image"
import JobForm from "@/components/job-form"
import JobList from "@/components/job-list"

export default function Home() {
  return (
    <main>
      <JobForm />
      <JobList />
    </main>
  )
}
