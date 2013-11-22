class Meme < ActiveRecord::Base
  attr_accessible :title, :image_url
  validates_presence_of :title, :image_url
  has_many :captions
end