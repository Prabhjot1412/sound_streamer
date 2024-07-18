# frozen_string_literal: true

class Character < ApplicationRecord
  belongs_to :profile, optional: true

  has_many :character_skills, dependent: :destroy
  has_many :skills, through: :character_skills, dependent: :destroy

  validates :name, presence: true

  DEFAULT_AVATAR = 'placeholder'

  WARRIOR = 'warrior'

  SUPPORTED_CLASSES = [
     WARRIOR,
  ]

  before_save :set_character
  before_save :set_current_stats

  def set_character
    self.char_class = WARRIOR if self.char_class.blank?
  end

  def set_current_stats
    self.current_hp ||= self.hp
    self.current_mp ||= self.mp
  end
end
