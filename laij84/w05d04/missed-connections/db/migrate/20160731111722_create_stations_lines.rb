class CreateStationsLines < ActiveRecord::Migration
  def change
    create_join_table :stations, :lines
  end
end
