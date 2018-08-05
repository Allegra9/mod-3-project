class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :name
      t.string :checked, :default => "false"

      t.timestamps
    end
  end
end
