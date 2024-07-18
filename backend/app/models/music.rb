class Music < ApplicationRecord
  belongs_to :user
  belongs_to :playlist, optional: true

  has_many :playlist_music, dependent: :destroy
  has_one_attached :song
  has_one_attached :thumbnail
end
