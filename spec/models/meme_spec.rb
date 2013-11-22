require 'spec_helper'

describe Meme do

   it "saves to db a title for meme" do
    should validate_presence_of(:title)
  end

  it "validates presence of title && url || local" do
    should validate_presence_of(:image_url)
  end

end