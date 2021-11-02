json.extract! user, :id, :email, :fname, :lname, :profile_img_url, :bio
if user.profile_photo.attached?
    json.photoUrl url_for(user.profile_photo)
end