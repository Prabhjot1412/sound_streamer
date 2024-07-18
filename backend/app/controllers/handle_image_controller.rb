# frozen_string_literal: true

class HandleImageController < ApplicationController
  def new
    authorize! :edit, Thumbnail

    images = Thumbnail.find_by!(set_name: 'base').images

    @handle_image_props = {
      csrf_token: session[:_csrf_token],
      create_path: '/handle_image',
      redirect_path: root_path,
      images: images.includes(:blob).each_with_object({}) do |img, hsh|
        hsh["#{img.blob[:filename].gsub('.','_')}"] = url_for(img)
      end
    }
  end
end
