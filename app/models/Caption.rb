class Caption < ActiveRecord::Base
  attr_accessible :title, :meme_id, :signature, :body, :votes
  belongs_to :meme
  before_create :zero_votes
private
  def zero_votes
    self.votes = 0
  end

end