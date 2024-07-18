class UserController < ApplicationController
  def fetch
    user_id = JwtService.decode(params[:token])[:user_id]
    @user = User.find_by(id: user_id)
    
    grps = []
  
    @user.groups.each do |group|
      hsh = {}
      hsh[:name] = group.name
      new_hsh = group.images.each_with_object({}) do |image, grp_hsh|
        grp_hsh[image.id] = url_for(image)
      end

      hsh[:images] = new_hsh.values
      hsh[:image_ids] = new_hsh.keys
      grps << hsh
    end

    musics = @user.musics.each_with_object([]) do |music, msc_ar|
      msc_hsh = {}

      msc_hsh[:id] = music.id
      msc_hsh[:name] = music.name
      msc_hsh[:url] = url_for(music.song)
      msc_hsh[:thumbnail] = url_for(music.thumbnail) if music.thumbnail.id
      msc_hsh[:playlists] = PlaylistMusic.where(music_id: music.id).each_with_object([]) do |pm, pm_ar|
        pm_ar << pm.playlist.name
      end

      msc_ar << msc_hsh
    end

    render json: {**@user, groups: grps, musics: musics, playlists: @user.playlists.pluck(:name)}, status: 200

  rescue => e
    render json: {error: e.message}, status: 500
  end
end
