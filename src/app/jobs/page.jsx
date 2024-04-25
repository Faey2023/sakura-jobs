import Link from "next/link";
import jobData from "../data/jobs.json";
import JobCard from "../Home/JobCard";

const JobPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto m-10 px-5">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-10">
        Job Listings
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {jobData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobPage;
