class Review < ApplicationRecord

    validates :user_id, :host_id, presence: true
    validates :rating, inclusion: { in: (1..5) }
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :host,
        foreign_key: :host_id,
        class_name: :User


end
