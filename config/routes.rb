PimpMyMeme::Application.routes.draw do

  root :to => "memes#index"

  resources :memes, only: [:index, :create, :new, :show]
  resources :captions, only: [:create, :new]

end
