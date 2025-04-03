import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, year, videoLink, description, pname } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5 relative">
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 right-5 text-red-500 text-3xl hover:text-red-700 transition duration-300"
      >
        <IoMdCloseCircleOutline />
      </button>

      <h2 className="text-3xl font-bold text-cyan">{name}</h2>
      <p className="text-lg text-gray-300">{year}</p>

      <div className="mt-5 w-full max-w-3xl">
        <iframe
          width="100%"
          height="400px"
          src={videoLink?.replace("watch?v=", "embed/")}
          title="Project Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64 md:h-96 rounded-lg shadow-lg"
        ></iframe>
      </div>

      <p className="mt-5 text-lg whitespace-pre-line">{description}</p>
    </div>
  );
};

export default ProjectDetails;
