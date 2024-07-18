class ProfileController < ApplicationController
  def create
    profile = Profile.new(profile_params)
    profile.user = current_user
    profile.difficulty = 'easy' if profile.difficulty.blank?
    profile.save

    render json: {error_messages: profile.errors.full_messages}
  rescue => error
    render error: error.message, status: 500
  end

  def profile_params
    params.delete(:profile)
    params.permit(:username, :difficulty)
  end
end
