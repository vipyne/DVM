require 'spec_helper'

describe Caption do

  it "validates presence of body for caption" do
    should validate_presence_of(:body)
  end

end