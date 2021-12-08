import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ updateRating, ratingState }) => {
    const [rating, setRating] = useState(ratingState);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        setRating(ratingState)
        // console.log("this is ratingState", ratingState)
    }, [ratingState])

    const updateStarRating = (ratingVal) => {
        setRating(ratingVal);
        updateRating(ratingVal);
    }

    return (
        < div id="rating-div" >
            {
                [...Array(5)].map((star, id) => {

                    let ratingVal = id + 1;

                    return (

                        < label key={id} >
                            <input
                                type="radio"
                                name="rating"
                                value={ratingVal}
                                onClick={() => updateStarRating(ratingVal)}
                                className="star-radio"
                            />


                            {
                                ratingVal <= (hover || rating) ?
                                    <AiFillStar className="star" onMouseEnter={() => setHover(ratingVal)} onMouseLeave={() => setHover(rating)} />
                                    : <AiOutlineStar className="star" onMouseEnter={() => setHover(ratingVal)} onMouseLeave={() => setHover(rating)} />
                            }
                        </label >
                    );
                })
            }
        </div >
    );

};

export default Rating;