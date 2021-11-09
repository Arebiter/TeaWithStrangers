class Attendance < ApplicationRecord

    validates :teatime_id, :user_id, presence:true
    
    
    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :teatime,
    foreign_key: :teatime_id,
    class_name: :TeaTime

end
