class RemoveDateFromTeaTimes < ActiveRecord::Migration[5.2]
  def change
    remove_column :tea_times, :date, :date
  end
end
