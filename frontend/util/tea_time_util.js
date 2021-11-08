export const fetchTeaTimes = () => {
    return $.ajax({
        method: "GET",
        url: `/api/tea_times`
    })
};

export const fetchTeaTime = tea_timeId => {
    return $.ajax({
        method: "GET",
        url: `/api/tea_times/${tea_timeId}`
    })
};

export const createTeaTime = tea_time => {
    return $.ajax({
        method: "POST",
        url: `/api/tea_times`,
        data: { tea_time }
    })
};

export const updateTeaTime = tea_time => {
    return $.ajax({
        method: "PATCH",
        url: `/api/tea_times/${tea_time.id}`,
        data: { tea_time }
    })
};

export const destroyTeaTime = tea_timeId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/tea_times/${tea_timeId}`,
    })
};
