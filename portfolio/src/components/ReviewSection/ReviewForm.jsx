import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ReviewForm = () => {
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [country, setCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => setCountry(data.countryCode)); // Auto-detect country
  }, []);

  const handleSubmit = () => {
    if (!reviewName || !reviewText || !isChecked) {
      alert("Please enter your name, review, and confirm the checkbox.");
      return;
    }

    const newReview = {
      name: reviewName,
      message: reviewText,
      country: country || "US",
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then(() => {
        setReviewName("");
        setReviewText("");
        navigate(-1); // Navigate back to reviews page
      })
      .catch((error) => console.error("Error adding review:", error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-5 relative ">
      {/* Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 right-5 text-red-500 text-3xl hover:text-red-700 transition duration-300"
      >
        <IoMdCloseCircleOutline />
      </button>

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-3xl text-cyan mb-4 text-center "
      >
        Leave a Review
      </motion.h2>

      <div className="flex flex-col bg-brown p-8 rounded-2xl w-full max-w-lg">
        <p className="text-center mb-4 text-white">
          Your feedback helps others understand my skills in web development.
          Please share your experience if we've worked together!
        </p>

        <input
          type="text"
          placeholder="Your Name"
          className="h-12 rounded-lg bg-lightBrown px-2 w-full"
          value={reviewName}
          onChange={(e) => setReviewName(e.target.value)}
        />

        <textarea
          className="rounded-lg bg-lightBrown p-2 w-full mt-4"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        <div className="flex items-center gap-2 mt-4 text-white">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-5 h-5 appearance-none border-2 border-black rounded-md checked:bg-black checked:border-black flex items-center justify-center cursor-pointer relative"
          />

          <span>I confirm that I’ve worked with this developer.</span>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-orange text-white px-4 py-2 rounded hover:bg-orange-dark transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
