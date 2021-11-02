export const fetchUsers = () => {
    return $.ajax({
        method: "GET",
        url: `/api/users`
    })
};

export const fetchUser = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
};

export const updateUser = formData => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${parseInt(formData.get("user[id]"))}`,
        data: formData,
        contentType: false,
        processData: false
    })
};
