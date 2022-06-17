Rails.application.routes.draw do
  get '/stats/year/:year', to: 'stats#year'

  resources :posts, only: [:index, :show, :create]
  resources :disasters, only: [:index, :show]
  resources :stories, only: [:index, :show]

  namespace :admin do
    resources :stories
    resources :posts
    resources :stats
    resources :disasters

    root to: "stories#index"
  end

  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'  
end
