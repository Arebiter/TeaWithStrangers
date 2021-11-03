# json.partial! 'api/tea_times/', tea_times: @tea_times
json.extract! @tea_times, :id, :location, :start_time, :end_time, :city_id, :host_id, :description