class MusicController < ApplicationController
  def create
    make_request do |errors, requests|
      raise "no song file provided" unless params[:song].present?
      music = Music.new
      music.user_id = current_user.id
      music.name = params[:name] == 'undefined' ? params[:song].original_filename : params[:name]
      music.song.attach(params[:song])
      music.thumbnail.attach(params[:thumbnail]) if params[:thumbnail].present? && params[:thumbnail] != "undefined"

      errors << music.errors.full_messages unless music.save
    end
  end

  def update
    make_request do |errors, requests|
      music = Music.find_by(id: params[:music_id], user_id: current_user.id)
      raise "music not found with id: #{params[:music_id]} and user_id: #{params[:current_user.id]}" unless music.present?
      music.name = params[:name] if params[:name] != "undefined"
      music.song.attach(params[:song]) if params[:song].present? && params[:song] != "undefined" 
      music.thumbnail.attach(params[:thumbnail]) if params[:thumbnail].present? && params[:thumbnail] != "undefined"

      errors << music.errors.full_messages unless music.save
    end
  end

  def destroy
    make_request do |errors, requests|
      music = Music.find(params[:id])

      errors << "song not found (id: #{params[:id] || "empty"})" if music.blank?
      music.destroy!
    end
  end
end
