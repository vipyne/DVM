require 'spec_helper'

describe MemesController do
  it "#index" do
    get :index
    response.status.should eq 200
  end

  it "#show" do
    my_meme = Meme.create(title: "bah", image_url: "/justhappened")
    get :show, id: my_meme.id
    response.status.should eq 200
  end



  it "upon click, meme takes you from index to show" do
    pending
    # integration?
  end

end


