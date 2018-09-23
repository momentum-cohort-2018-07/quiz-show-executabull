Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api do
      resources :users
      resource :logins, only: :create
      resources :quizzes, only: [:index, :update, :create, :show, :destroy] do
        resources :questions do
          resources :answers
        end
      end
    end
end
