class AddDateToTeaTimes < ActiveRecord::Migration[5.2]
  def change
    add_column :tea_times, :date, :date
  end
end
