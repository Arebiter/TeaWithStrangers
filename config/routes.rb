Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :tea_times, only: [:index, :show, :create, :destroy, :update]
    resources :cities, only: [:index]
    resources :attendances, only: [:index, :create, :destroy, :show]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

end
