import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <div className="max-w-[1000px] flex flex-col mx-auto items-center justify-center mt-[100px] px-4 sm:hidden lg:block ">
      <h1 className="text-4xl text-cyan mb-10 text-center">
        GitHub Contributions
      </h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
        <GitHubCalendar username="GWMDhananjaya" />
      </div>
    </div>
  );
};

export default GitHubContributions;
