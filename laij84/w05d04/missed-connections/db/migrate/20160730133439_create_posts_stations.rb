class CreatePostsStations < ActiveRecord::Migration
  def change
    create_join_table :posts, :stations
  end
end
