
    json.extract! user, :id, :email, :fname, :lname, :bio
    json.attendances user.attendances.pluck(:teatime_id)
    json.reviews_of_hosts user.reviews_of_hosts.pluck(:host_id)
    json.reviews_by_users user.reviews_by_users.pluck(:user_id)
    if user.profile_photo.attached?
        json.photoUrl url_for(user.profile_photo)
    end
