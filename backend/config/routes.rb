Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    post 'scores/create' 
    get 'scores/show'
    resources :users
    resources :logins, only: :create
     resources :quizzes, only: [:index, :update, :create, :show, :destroy] do
      resources :questions do
        resources :answers
      end
    end
  end
end
