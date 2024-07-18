Rails.application.routes.draw do
  resources :registration, only: %i[index create new]

  get '/login' , to: 'registration#show'
  get '/logout', to: 'registration#delete'
  post '/login_api', to: 'registration#login_api'
  get 'fetch_user', to: 'user#fetch'

  get 'hello_world', to: 'hello_world#index'

  resources :profile, only: %i[create]
  resources :characters, only: %i[create]
  resources :handle_image, only: %i[new]

  root "main_page#index"

  resources :main_page, only: %i[index] do
    collection do 
      get :home
    end
  end

  scope :api do
    get 'user_images/:token', to: 'myapp#user_images'
    get '/image/comments', to: 'myapp#fetch_comments'
    post 'calendar', to: 'myapp#create_calendar'
    get 'fetch_calendars', to: 'myapp#fetch_calendars'

    post 'user_images/:group_name/create', to: 'myapp#create'
    post 'group/create', to: 'myapp#group_create'
    post '/user/create', to: 'myapp#user_create'
    post '/image/commment/create', to: 'myapp#make_comment'
    post '/image/comment/delete', to: 'myapp#delete_comment'
    post '/image/comment/image', to: 'myapp#delete_image'
    
    resources :music, only: %i[create]
    post '/music/destroy', to: 'music#destroy'
    post '/music/update', to: 'music#update'

    resources :playlist, only: %i[create]
    post '/playlist/destroy', to: 'playlist#destroy'
    post '/playlist/update', to: 'playlist#update'
  end
end
