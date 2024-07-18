# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    return unless user.present?

    if user.admin?
      can :edit, Thumbnail
    end
  end
end
