import React, { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";
import ReviewsPopup from "./ReviewsPopup";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/framerMotion/variants";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");

  const reviewsPerPage = 3;

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const nextReviews = () => {
    setStartIndex((prevIndex) =>
      prevIndex + reviewsPerPage >= reviews.length
        ? 0
        : prevIndex + reviewsPerPage
    );
  };

  const handleReviewSubmit = () => {
    if (!reviewName || !reviewText) {
      alert("Please enter your name and review.");
      return;
    }

    const newReview = {
      name: reviewName,
      message: reviewText,
      country: "US", // Default country (can be changed)
    };

    setReviews([...reviews, newReview]);
    setIsPopupOpen(false);
    setReviewName("");
    setReviewText("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-6xl text-cyan mb-10 text-center"
      >
        Review
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col md:flex-row gap-5 m-8"
      >
        {reviews
          .slice(startIndex, startIndex + reviewsPerPage)
          .map((review, index) => (
            <ReviewsCard
              key={index}
              img={`https://flagcdn.com/w40/${review.country.toLowerCase()}.png`}
              name={review.name}
              message={review.message}
              country={review.country}
            />
          ))}
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center gap-3"
      >
        {reviews.length > reviewsPerPage && (
          <motion.button
            onClick={nextReviews}
            className="border border-orange rounded-full py-2 px-4 flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
          >
            Next Reviews
          </motion.button>
        )}
        <button
          onClick={() => setIsPopupOpen(true)}
          className="border border-orange rounded-full py-2 px-4 flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
        >
          Place Review
        </button>
      </motion.div>

      {isPopupOpen && (
        <ReviewsPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onSubmit={handleReviewSubmit}
          reviewName={reviewName}
          setReviewName={setReviewName}
          reviewText={reviewText}
          setReviewText={setReviewText}
        />
      )}
    </div>
  );
};

export default Reviews;
