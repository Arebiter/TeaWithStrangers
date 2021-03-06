class User < ApplicationRecord

        attr_reader :password
      
        validates :email, :password_digest, :session_token, :fname, :lname, presence: true
        validates :email, uniqueness: true
        validates_format_of :email, :with => /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/, uniqueness: true
        validates :password, length: { minimum: 6 }, allow_nil: true
      
        after_initialize :ensure_session_token

        has_one_attached :profile_photo

        has_many :hosted_tea_times,
          foreign_key: :host_id,
          class_name: :TeaTime

        has_many :attendances,
          foreign_key: :user_id,
          class_name: :Attendance

        has_many :reviews_of_hosts,
          foreign_key: :user_id,
          class_name: :Review

        has_many :reviews_by_users,
          foreign_key: :host_id,
          class_name: :Review,
          dependent: :destroy
      
        def self.find_by_credentials(email, password)
          user = User.find_by(email: email)
          return nil unless user
          user.is_password?(password) ? user : nil
        end
      
        def password=(password)
          @password = password
          self.password_digest = BCrypt::Password.create(password)
        end
      
        def is_password?(password)
          BCrypt::Password.new(self.password_digest).is_password?(password)
        end
      
        def reset_session_token!
          generate_unique_session_token
          save!
          self.session_token
        end
      
        private
      
        def ensure_session_token
          generate_unique_session_token unless self.session_token
        end
      
        def new_session_token
          SecureRandom.urlsafe_base64
        end
      
        def generate_unique_session_token
          self.session_token = new_session_token
          while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
          end
          self.session_token
        end
      
      
end
