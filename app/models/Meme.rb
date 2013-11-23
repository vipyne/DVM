class Meme < ActiveRecord::Base
  attr_accessible :title, :image_url, :public_id
  has_many :captions
end