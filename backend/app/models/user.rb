class User < ApplicationRecord
  has_secure_password

  has_many :profiles, dependent: :destroy
  has_many :groups, dependent: :destroy
  has_many :musics, dependent: :destroy
  has_many :playlists, dependent: :destroy
  has_many :fund_calendars, dependent: :destroy

  validates :username, uniqueness: true
  enum :role, %i[user admin]

  def to_hash
    {
      user: self.as_json,
      profile: self.profiles&.map do |profile|
        profile.as_json.merge( { characters: profile.characters.as_json } )
      end,
      char_classes: Character::SUPPORTED_CLASSES
    }
  end
end
