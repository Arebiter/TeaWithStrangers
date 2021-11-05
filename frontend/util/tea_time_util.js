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

// export const updateUser = formData => {
//     return $.ajax({
//         method: "PATCH",
//         url: `/api/users/${parseInt(formData.get("user[id]"))}`,
//         data: formData,
//         contentType: false,
//         processData: false
//     })
// };
