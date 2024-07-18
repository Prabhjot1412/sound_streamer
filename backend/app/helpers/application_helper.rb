module ApplicationHelper
  def navbar_props
    {
      logged_in: current_user.present?,
      username: current_user&.username,
      image_view_path: new_handle_image_path,
      admin: !!(current_user&.admin?)
    }
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

    session.delete(:user_token)
    true
  end
end
