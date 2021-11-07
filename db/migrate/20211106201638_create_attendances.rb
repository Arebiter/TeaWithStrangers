class CreateAttendances < ActiveRecord::Migration[5.2]
  def change
    create_table :attendances do |t|
      t.integer :teatime_id, null:false
      t.integer :user_id, null:false
      t.timestamps
    end

    add_index :attendances, [:teatime_id, :user_id], unique: true
  end
end
