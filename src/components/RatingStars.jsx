import { useState } from "react";
import { FaStar, FaRegStar } from "../utils/iconsLib";

function Stars({
  maxLength = 5,
  size,
  defaultRating = 0,
  color,
  setYourRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);
  function handelRating(i) {
    setTempRating(i + 1);
  }
  function handleDefAndCusRateing(i) {
    setRating(i);
    setYourRating(i);
  }
  return (
    <div className={`${size} ${color} flex items-center gap-1`}>
      <div className={`flex cursor-pointer`}>
        {Array.from({ length: maxLength }, (_, i) => (
          <>
            {i >= (tempRating || rating) ? (
              <FaRegStar
                key={i}
                onMouseEnter={() => handelRating(i)}
                onClick={() => handleDefAndCusRateing(i + 1)}
              />
            ) : (
              <FaStar
                onClick={() => handleDefAndCusRateing(i + 1)}
                onMouseLeave={() => setTempRating(rating)}
                onMouseEnter={() => handelRating(i)}
              />
            )}
          </>
        ))}
      </div>
      <p>{tempRating || rating}</p>
    </div>
  );
}

export default Stars;
