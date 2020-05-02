Rails.application.routes.draw do
  resources :subjects
  get 'pages/home' 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'category', to: 'category#home', as: 'categorias'
end
