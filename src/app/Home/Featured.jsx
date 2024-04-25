import Link from "next/link";
import jobData from "../data/jobs.json";
import JobCard from "./JobCard";

const Featured = () => {
  return (
    <div className="max-w-screen-xl mx-auto m-16 px-5">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-10">
        Featured Jobs
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {jobData.slice(0, 6).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      <Link
        href="/jobs"
        className="flex justify-center items-center w-60 mx-auto my-5 btn btn-outline bg-gradient-to-r from-teal-600 to-sky-600 hover:bg-teal-600 hover:border-none text-white capitalize"
      >
        Explore more Jobs
      </Link>
    </div>
  );
};

export default Featured;
