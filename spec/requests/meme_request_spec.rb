require 'spec_helper'

describe "requests for meme resource" do
  it "creates a new meme w currect params" do
    expect{
      post "/memes", :meme => {title: "bah", image_url: "http://3.bp.blogspot.com/-cnMH8UihxyI/UID-UT2EOqI/AAAAAAAABWQ/7P16GcUpYfY/s1600/monkey+2.jpg"}
    }.to change{ Meme.count}.by(1)
  end

  it "saves to db a new meme from local" do
    pending
    # request?
  end

  it "upon submission, saves to db a body and signature for a caption" do
    mememe = Meme.create(id: 1, title: "bah", image_url: "http://3.bp.blogspot.com/-cnMH8UihxyI/UID-UT2EOqI/AAAAAAAABWQ/7P16GcUpYfY/s1600/monkey+2.jpg")
    expect{
      post "/captions", :caption => {body: "bah", signature: "tommayy", meme_id: mememe.id}
    }.to change{ Caption.count}.by(1)
  end

end

