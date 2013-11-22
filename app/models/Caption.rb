class Caption < ActiveRecord::Base
  attr_accessible :title, :meme_id, :signature, :body
  validates_presence_of :body
  belongs_to :meme
end