@cities.each do |city|
    json.set! city.id do
        json.extract! city, :id, :city_name
        json.tea_times city.tea_times.pluck(:id)
    end
end
