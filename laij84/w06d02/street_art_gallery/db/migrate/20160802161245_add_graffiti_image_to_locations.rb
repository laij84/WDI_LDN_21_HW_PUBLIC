class AddGraffitiImageToLocations < ActiveRecord::Migration[5.0]
  def change
    add_column :locations, :graffiti_image, :string
  end
end
