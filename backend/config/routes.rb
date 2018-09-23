Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api do
      resources :users
      resource :logins, only: :create
      resources :quizzes, only: [:index, :update, :create, :show, :destroy] do
        resources :questions, only: [:create, :destroy] do
          resources :answers, only: [:create, :destroy]
        end
      end
    end
end
