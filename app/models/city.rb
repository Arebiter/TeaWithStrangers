class City < ApplicationRecord


    validates :city_name, presence:true, uniqueness:true

    has_many :tea_times,
        foreign_key: :city_id,
        class_name: :TeaTime

end
