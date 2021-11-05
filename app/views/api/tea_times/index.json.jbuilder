# json.partial! 'api/tea_times/', tea_times: @tea_times
@tea_times.each do |tea_time|
    json.set! tea_time.id do 
        json.extract! tea_time, :id, :location, :start_time, :end_time, :city_id, :host_id, :description
    end
end