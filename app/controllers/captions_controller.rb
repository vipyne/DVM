class CaptionsController < ApplicationController
  # convention to action order: index show new create edit update destroy
  def new
    @caption = Caption.new
  end

  def create
    @caption = Caption.new(params[:caption])
    if @caption.save
      render :partial => "newly_added", :locals => {:caption => @caption}
    else
      # handle the errors
    end
  end

  def update
    @caption = Caption.find(params[:id])
    @caption.vote!
    render :partial => "newly_added", :locals => {:caption => @caption}
  end


end
