class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null:false, unique:true
      t.string :first_name, null: false
      t.string :last_name
      t.text :bio
      t.text :profile_img_url
      t.string :password_digest, null:false
      t.string :session_token, null:false, unique: true
      t.timestamps
    end

    add_index :users, :email
    add_index :users, :session_token
  end
end
