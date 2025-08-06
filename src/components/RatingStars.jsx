import { useState } from "react";
import { FaStar, FaRegStar } from "../utils/iconsLib";

function Stars({ maxLength = 5, size, defaultRating = 4, color }) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  function handelRating(i) {
    setTempRating(i + 1);
  }
  return (
    <div className={`${size} ${color} flex items-center gap-1`}>
      <div className={`flex cursor-pointer`}>
        {Array.from({ length: maxLength }, (_, i) => (
          <>
            {i >= (tempRating || rating) ? (
              <FaRegStar key={i} onMouseEnter={() => handelRating(i)} />
            ) : (
              <FaStar
                key={i}
                onClick={() => setRating(i + 1)}
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
