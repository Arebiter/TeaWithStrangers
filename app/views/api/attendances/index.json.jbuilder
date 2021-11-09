@attendances.each do |attendance|
    json.set! attendance.id do 
        json.extract! attendance, :id, :teatime_id, :user_id
    end
end