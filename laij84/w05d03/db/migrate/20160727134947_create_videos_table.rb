class CreateVideosTable < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title
      t.text :description
      t.string :url
      t.string :genre
    end
  end
end
