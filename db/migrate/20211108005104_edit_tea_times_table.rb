class EditTeaTimesTable < ActiveRecord::Migration[5.2]
  def change
    add_column :tea_times, :date, :date
    change_column_null :tea_times, :date, false
    change_column :tea_times, :start_time, :string
    change_column :tea_times, :end_time, :string
  end
end
