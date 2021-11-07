
    json.extract! user, :id, :email, :fname, :lname, :bio
    json.attendances user.attendances.pluck(:teatime_id)
    if user.profile_photo.attached?
        json.photoUrl url_for(user.profile_photo)
    end
