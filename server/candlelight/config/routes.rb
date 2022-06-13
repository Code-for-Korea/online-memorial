Rails.application.routes.draw do
  namespace :admin do
      resources :stories
      resources :posts
      resources :stats
      resources :disasters

      root to: "stories#index"
    end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
