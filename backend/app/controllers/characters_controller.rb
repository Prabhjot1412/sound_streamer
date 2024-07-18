class CharactersController < ApplicationController
  def create
    profile = Profile.find(params[:profile_id])
    character = profile.characters.new(character_params)

    character.avatar_name = Character::WARRIOR if character.avatar_name == ""

    character.save

    render json: {error_messages: character.errors.full_messages}
  rescue => error
    render json: {error_messages: [error.message]}
  end

  def profile_params
    params.delete(:profile)
    params.permit(:username, :difficulty)
  end

  private

  def character_params
    params[:character].delete(:profile_id)

    params[:character][:avatar_name] ||= params[:character][:char_class] 
    params.require(:character).permit(:name, :class, :avatar_name)
  end
end
