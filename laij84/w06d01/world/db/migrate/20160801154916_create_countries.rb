class CreateCountries < ActiveRecord::Migration[5.0]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :flag
      t.float :size
      t.integer :population
      t.string :language
      t.string :currency
      t.references :continent, foreign_key: true

      t.timestamps
    end
  end
end
