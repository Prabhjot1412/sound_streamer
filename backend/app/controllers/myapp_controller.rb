class MyappController < ApplicationController
  def user_images
    render json: {response: "hello world"}
  end

  def create
    errors = []

    group = current_user.groups.find_or_create_by(name: params[:group_name])
    group.images.attach(params[:image])

    render json: {error_messages: errors}, status: 200
  rescue => error
    errors << error.message
    render json: {error_messages: errors}
  end

  def group_create
    errors = []

    current_user.groups.create(name: params[:group])

    render json: {error_messages: errors }, status: 200
  rescue => error
    errors << error.message
    render json: {error_messages: errors}
  end

  def user_create
    make_request(user_token: true) do |errors, request|
      user = User.new(user_params)

      if user.save
        request["user_token"] = log_in_user(user_id: user.id)
      else
        errors.concat user.errors.full_messages
      end
    end
  end

  def fetch_comments
    make_request do |errors, requests|
      requests["output"] = Image::FetchComments.call(image_id: params[:image_id])
    end
  end

  def make_comment
    make_request do |errors, requests|
      imd = ImageDetail.new
      imd.image_id = params[:image_id]
      imd.comment = params[:comment]

      if imd.save
        requests["output"] = "Success"
      else
        errors << imd.errors.full_messages
      end
    end
  end

  def delete_comment
    make_request do |errors, requests|
      validate_image_exists

      comment = ImageDetail.find(params[:image_details_id])
      comment.destroy
    end
  end

  def delete_image
    make_request do |errors, requests|
      image = validate_image_exists

      ActiveRecord::Base.transaction do
        ImageDetail.where(image_id: image.id).destroy_all
        image.destroy
      end
    end
  end

  def create_calendar
    @fund_calendar = current_user.fund_calendars.new
    @fund_calendar.total_amount = params['goal'].to_f
    @fund_calendar.expected_returns = params['yearlyReturns'].to_f
    @fund_calendar.time_in_years = params["timeInYears"].to_i
    data = params["myapp"].except("timeInYears", "goal", "yearlyReturns")
    @fund_calendar.data = data

    if @fund_calendar.save
      render json: {"response": "success"}
    else
      render json: {"response": "failure"}
    end
  end

  def fetch_calendars
    render json: current_user.fund_calendars.as_json
  end

  private

  def user_params
    params.permit(:username, :password)
  end

  def validate_image_exists
    grp = current_user.groups.find_by_name(params[:group])
    image = grp.images.all.where(id: params[:image_id])[0]
    return image if image.present?

    raise "current user doesn't have image with id #{params[:image_id]}"    
  end
end
