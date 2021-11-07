export const fetchTeaTimes = () => {
    return $.ajax({
        method: "GET",
        url: `/api/tea_times`
    })
};

export const fetchTeaTime = teatimeId => {
    return $.ajax({
        method: "GET",
        url: `/api/tea_times/${teatimeId}`
    })
};

export const createTeaTime = teatime => {
    return $.ajax({
        method: "POST",
        url: `/api/tea_times`,
        data: { teatime }
    })
};

export const updateTeaTime = teatime => {
    return $.ajax({
        method: "PATCH",
        url: `/api/tea_times/${teatime.id}`,
        data: { teatime }
    })
};
