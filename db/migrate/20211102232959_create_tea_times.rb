class CreateTeaTimes < ActiveRecord::Migration[5.2]
  def change
    create_table :tea_times do |t|
      t.string :location, null:false
      t.string :start_time, null:false
      t.string :end_time, null:false
      t.date :date, null:false
      t.integer :city_id, null:false
      t.integer :host_id, null:false
      t.text :description, null:false

      t.timestamps
    end

    add_index :tea_times, :city_id
    add_index :tea_times, :host_id
  end
end
