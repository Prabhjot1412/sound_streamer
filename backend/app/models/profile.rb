class Profile < ApplicationRecord
  belongs_to :user

  has_many :characters, dependent: :destroy

  DIFFICULTIES = [
    'easy',
    'medium',
    'hard'
  ]

  validates :username, presence: true
  validates :difficulty, presence: true
  validate :unique_user

  def unique_user
    if Profile.where(user_id: self.user_id, username: self.username).present?
      errors.add(:username, 'already exists')
    end
  end
end
