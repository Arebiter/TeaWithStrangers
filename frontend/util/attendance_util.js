export const fetchAttendances = () => {
    return $.ajax({
        method: "GET",
        url: `/api/attendances`
    })
};

export const createAttendance = (attendance) => {
    return $.ajax({
        method: "POST",
        url: `/api/attendances`
    })
};

export const destroyAttendance = (attendanceId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/attendances/${attendanceId}`
    })
}