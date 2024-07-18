class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, if: :frontend_request
  before_action :set_user

  rescue_from CanCan::AccessDenied do |exception|
    flash[:message] = exception.message
    redirect_to root_path
  end

  FRONTEND_URL = ["http://localhost:3000"]
  private

  def log_in_user(user_id:)
    session[:user_token] = JwtService.encode(user_id)
  end

  def current_user
    return if session[:user_token].nil?
    return if expired?

    user_id = JwtService.decode(session[:user_token])[:user_id]
    return unless user_id
    User.find(user_id)
  end

  def expired?
    generated_at = JwtService.decode(session[:user_token])[:generated_at].to_datetime
    return false if generated_at > 6.hours.ago

    reset_session
    true
  end

  def frontend_request
    origin_url = request.headers["origin"]

    FRONTEND_URL.include?(origin_url)
  end

  def set_user
    return unless session[:user_token].blank?
    return unless params[:user_token]

    session[:user_token] = params[:user_token]
  end

  def make_request(user_token: false, &block)
  errors = []
  requests = {}

  yield(errors, requests)

  response = {error_messages: errors}

  response["user_token"] = requests["user_token"] if user_token
  response["output"] = requests["output"] if requests["output"]

  render json: response, status: 200
  rescue => error
    errors << error.message
    render json: {error_messages: errors}
  end
end
