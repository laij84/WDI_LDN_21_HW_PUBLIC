class AddImageToContinents < ActiveRecord::Migration[5.0]
  def change
    add_column :continents, :image, :string
  end
end
