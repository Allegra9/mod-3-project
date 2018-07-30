class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :description
      t.string :priority
      t.datetime :to_be_completed_by
      t.string :status
      t.integer :list_id

      t.timestamps
    end
  end
end
