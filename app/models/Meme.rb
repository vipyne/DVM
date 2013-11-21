class Meme < ActiveRecord::Base
  attr_accessible :title, :image_url
  has_many :captions
end