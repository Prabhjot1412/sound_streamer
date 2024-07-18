class MainPageController < ApplicationController
  def index
    images = Thumbnail.find_by!(set_name: 'base').images

    @main_page_index_props = {
      **user_details,
      csrf_token: session[:_csrf_token],
      difficulties: Profile::DIFFICULTIES,
      profile_create_path: profile_index_path,
      character_create_path: characters_path,
      redirect_path: root_path,
      images: images.includes(:blob).each_with_object({}) do |img, hsh|
        hsh["#{img.blob[:filename].gsub('.','_')}"] = url_for(img)
      end
    }
  end

  def home
    @home_page_props = {}
  end

  private

  def user_details
    return {} unless current_user.present?

    current_user.to_hash
  end
end
