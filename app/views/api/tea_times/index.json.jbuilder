# json.partial! 'api/tea_times/', tea_times: @tea_times
@tea_times.each do |tea_time|
    json.set! tea_time.id do 
        json.partial! 'api/tea_times/tea_time', tea_time: tea_time
    end
end