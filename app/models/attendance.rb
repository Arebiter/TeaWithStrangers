class Attendance < ApplicationRecord

    validates :teatime_id, :user_id, presence:true
    
    


end
