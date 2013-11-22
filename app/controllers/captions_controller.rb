class CaptionsController <ApplicationController

  def new
    @caption = Caption.new
  end

  def create
    @caption = Caption.create(params[:caption])
    render :partial => "/captions/newly_added", :locals => {:caption => @caption}
  end


end
