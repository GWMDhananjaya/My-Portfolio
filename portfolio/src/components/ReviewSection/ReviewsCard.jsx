import React from "react";

const ReviewsCard = ({ name, message, country }) => {
  return (
    <div className="w-[350px] md:w-[250px] lg:w-[300px] bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(219,215,215,0.24)]">
      <div className=" flex flex-row justify-center items-center  gap-4 mb-9 mt-5">
        <img
          className=" rounded-full  w-10 "
          src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
          alt={country}
        />
        <h3 className="font-semibold">{name.split(" ")[0]}</h3>
      </div>
      <div>
        <p className=" text-lightText">{message}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
