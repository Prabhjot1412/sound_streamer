module JwtService
  class << self
    def encode(user_id)
      payload = { user_id: user_id, generated_at: Time.now}

      JWT.encode(payload, nil, 'none')
    end

    def decode(token)
      JWT.decode(token, nil, false)[0].symbolize_keys
    end
  end
end
