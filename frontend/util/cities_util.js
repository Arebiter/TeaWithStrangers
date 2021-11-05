import { $CombinedState } from "redux"

export const fetchCities = () => {
    return $.ajax({
        method: "GET",
        url: `/api/cities`
    })
};

