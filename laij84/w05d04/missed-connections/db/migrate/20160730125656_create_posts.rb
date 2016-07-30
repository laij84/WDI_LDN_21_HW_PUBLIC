class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :description
      t.date :date
      t.time :time
      t.integer :user_id
    end
  end
end
