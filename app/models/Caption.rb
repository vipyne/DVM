class Caption < ActiveRecord::Base
  attr_accessible :title, :meme_id, :signature, :body

  belongs_to :memes
end