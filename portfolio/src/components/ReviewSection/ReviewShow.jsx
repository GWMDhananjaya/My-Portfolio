// not need
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";

const ReviewShow = () => {
  const [reviews, setReviews] = useState([]);
  // Get existing reviews from backend
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="space-y-4 mt-4 flex">
        {reviews.map((review, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="items-center space-x-3">
                <img
                  src={`https://flagcdn.com/w40/${review.country.toLowerCase()}.png`}
                  alt={review.country}
                  className="w-8 h-8 rounded-lg object-contain"
                />
                <p className="font-semibold">
                  {review.name} ({review.country})
                </p>
              </div>
              <p className="mt-2 text-gray-600">{review.message}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewShow;
