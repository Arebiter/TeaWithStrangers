# json.partial! 'api/tea_times/', tea_times: @tea_times
@tea_times.each do |tea_time|
    json.set! tea_time.id do 
        json.extract! tea_time, :id, :location, :date, :start_time, :end_time, :city_id, :host_id, :description
        json.attendees tea_time.attendees.pluck(:user_id)
    end
end