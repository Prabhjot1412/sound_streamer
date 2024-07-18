class PlaylistController < ApplicationController
  def create
    make_request do |errors, requests|
      playlist = Playlist.new
      playlist.name = params[:name]
      playlist.user_id = current_user.id
      errors << playlist.errors.full_messages unless playlist.save
    end
  end

  def destroy
    make_request do |errors, requests|
      playlist = Playlist.find_by_name(params['name'])
      errors << "no playlist found with name #{params[:name]}" unless playlist.present?
      playlist&.destroy!
    end
  end

  def update; end
end
