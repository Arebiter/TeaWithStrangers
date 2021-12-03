class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null:false
      t.integer :host_id, null:false
      t.integer :rating, null: false
      t.text :review

      t.timestamps
    end

    add_index :reviews, [:user_id, :host_id], unique: true
  end
end
