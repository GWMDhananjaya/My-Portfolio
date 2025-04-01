import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ReviewsPopup = ({
  isOpen,
  onClose,
  onSubmit,
  reviewName,
  setReviewName,
  reviewText,
  setReviewText,
}) => {
  const [country, setCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Detect user's country automatically
  useEffect(() => {
    fetch("https://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => setCountry(data.countryCode)); // Auto-detect country
  }, []);

  const handleSubmit = () => {
    if (!reviewName || !reviewText || !isChecked)
      return alert("Please enter your name, review, and confirm the checkbox.");

    const newReview = {
      name: reviewName,
      message: reviewText,
      country: country || "US", // Default to US if detection fails
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then(() => {
        onSubmit();
        setReviewName("");
        setReviewText("");
        onClose();
      })
      .catch((error) => console.error("Error adding review:", error));
  };

  if (!isOpen) return null; // If popup is not open, don't render anything

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="max-w-[550px] mx-auto items-center justify-center mt-[100px] sm:px-3 md:px-8 lg:px-4"
      >
        <h2 className="text-3xl text-cyan mb-10 text-center">Leave a Review</h2>
        <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
          <div className="flex items-center justify-center ">
            <div className="flex flex-col gap-8 w-[400px] items-center justify-center">
              <p className="text-center mb-4 text-white">
                Your feedback helps others understand my skills in web
                development. Please share your experience if we've worked
                together!
              </p>

              <input
                type="text"
                placeholder="Your Name"
                className="h-12 rounded-lg bg-lightBrown px-2 w-full"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
              />

              <textarea
                className="rounded-lg bg-lightBrown p-2 w-full"
                placeholder="Write your review here..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>

              <div className="flex items-center gap-2 mt-4 text-white">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                />
                <span>I confirm that I’ve worked with this developer.</span>
              </div>

              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={onClose}
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
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewsPopup;
