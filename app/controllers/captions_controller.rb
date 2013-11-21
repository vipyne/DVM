class CaptionsController <ApplicationController
  def create
    @caption = Caption.new
  end

  def new
    @caption = Caption.new
  end


end
