class CreatePlaylistMusics < ActiveRecord::Migration[7.0]
  def change
    create_table :playlist_musics do |t|
      t.bigint :music_id
      t.bigint :playlist_id

      t.timestamps
    end
  end
end
