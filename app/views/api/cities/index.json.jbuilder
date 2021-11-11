@cities.each do |city|
    json.set! city.id do
        json.extract! city, :id, :city_name
        json.tea_times city.tea_times.pluck(:id)

        # json.tea_times
            # another loop to city.teatimes do |teatime|
                # json.set! tea_time.id do 
                # get the information of teatime
    end
end



# and a teatime show with all user, attendance