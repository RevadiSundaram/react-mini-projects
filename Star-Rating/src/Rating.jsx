import "./index.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurId) => {
    setRating(getCurId);
  };
  const handleHover = (getCurId) => {
    setHover(getCurId);
  };
  // const handleMouseLeave = () => {
  //   setRating(rating);
  // };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleHover(index)}
            // onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
};
export default Rating;
