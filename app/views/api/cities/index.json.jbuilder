@cities.each do |city|
    json.set! city.id do
        json.extract! city, :id, :city_name
        json.set! :tea_times, city.tea_times.map{|tea_time| tea_time.id}
    end
end
