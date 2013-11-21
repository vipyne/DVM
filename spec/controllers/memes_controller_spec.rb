require 'spec_helper'

describe MemesController do
  it "#index" do
    get :index
    response.status.should eq 200
  end
end