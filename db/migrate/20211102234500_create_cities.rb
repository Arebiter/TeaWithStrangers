class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :city_name, null:false, unique:true
      t.timestamps
    end

    add_index :cities, :city_name
  end
end
