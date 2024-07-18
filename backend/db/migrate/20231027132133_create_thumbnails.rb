class CreateThumbnails < ActiveRecord::Migration[7.0]
  def change
    create_table :thumbnails do |t|
      t.string :set_name

      t.timestamps
    end
  end
end
