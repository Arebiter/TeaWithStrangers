import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ updateRating }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const updateStarRating = (ratingVal) => {
        setRating(ratingVal);
        updateRating(ratingVal);
    }

    return (
        <div>
            {[...Array(5)].map((star, id) => {
                const ratingVal = id + 1;
                return (
                    <label key={id}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingVal}
                            // className={ratingVal <= (hover || rating) ? "on" : "off"}
                            onClick={() => updateStarRating(ratingVal)}
                        // onMouseEnter={() => setHover(ratingVal)}
                        // onMouseLeave={() => setHover(rating)}
                        />


                        {ratingVal <= (hover || rating) ?
                            <AiFillStar className="star" onMouseEnter={() => setHover(ratingVal)} onMouseLeave={() => setHover(rating)} />
                            : <AiOutlineStar className="star" onMouseEnter={() => setHover(ratingVal)} onMouseLeave={() => setHover(rating)} />
                        }
                    </label>
                );
            })
            }
        </div>
    );

};

export default Rating;