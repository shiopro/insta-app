Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:show, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
end
