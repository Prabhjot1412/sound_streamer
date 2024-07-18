class CreateImageDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :image_details do |t|
      t.bigint :image_id
      t.string :comment

      t.timestamps
    end

    add_index :image_details, :image_id
  end
end
