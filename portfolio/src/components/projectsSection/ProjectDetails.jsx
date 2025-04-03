import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, videoLink, description } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col  bg-gray-900 text-white p-10 relative">
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 right-5 text-red-500 text-3xl hover:text-red-700 transition duration-300"
      >
        <IoMdCloseCircleOutline />
      </button>

      <h2 className="text-3xl font-bold text-cyan lg:m-5">{name}</h2>

      <div className="flex lg:flex-row md:flex-col sm:flex-col sm:items-center">
        <div className="mt-5 w-full max-w-3xl m-5">
          <iframe
            width="100%"
            height="100%"
            src={videoLink?.replace("watch?v=", "embed/")}
            title="Project Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          ></iframe>
        </div>

        <p className="font-sans mt-5 text-lg whitespace-pre-line lg:m-5 lg:w-200">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
