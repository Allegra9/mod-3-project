class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :name
      t.string :checked, :default => "false"
      t.integer :user_id, :default => 1

      t.timestamps
    end
  end
end
