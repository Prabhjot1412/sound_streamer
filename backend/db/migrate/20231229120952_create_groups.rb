class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name, null: false

      t.timestamps
    end
  end
end
