class TeaTime < ApplicationRecord


    #validation - all things in schema should exist - presence:true
    validates :location, :start_time, :end_time, :date, :city_id, :host_id, :description, presence:true

    #association 
    #belongs to a host and belongs to a city
    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User

    belongs_to :city,
        foreign_key: :city_id,
        class_name: :City   

    has_many :attendees,
        foreign_key: :teatime_id,
        class_name: :Attendance

end
