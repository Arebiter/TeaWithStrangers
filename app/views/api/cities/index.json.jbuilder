@cities.each do |city|
    json.cities do 
        json.set! city.id do
            json.extract! city, :id, :city_name
            json.tea_times city.tea_times.pluck(:id)
        end
    end

        # json.tea_times city.tea_times do |teatime|
        #     json.set! teatime.id do 
        #         json.extract! teatime, :id, :location, :date, :start_time, :end_time, :city_id, :host_id, :description
        #         json.attendees teatime.attendees.pluck(:user_id)
        #     end
        # end
    city.tea_times.each do |teatime|
        json.tea_times do
            json.set! teatime.id do 
                json.extract! teatime, :id, :location, :date, :start_time, :end_time, :city_id, :host_id, :description
                json.attendees teatime.attendees.pluck(:user_id)
            end
        end

        # teatime.attendees.each do |attendee|
        #     json.users do 
        #         json.set! attendee.id do 
        #             json.extract! attendee, :id, :email, :fname, :lname, :bio
        #         end
        #     end
        # end
    end
end



# and a teatime show with all user, attendance