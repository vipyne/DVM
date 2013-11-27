class MemesController < ApplicationController

  def index
    @memes = Meme.all
    @meme = Meme.new
  end

  def create
    # bad var name
    # you're only handling the happy path, what's that mean?
    # what happens if I couldn't create the Meme? you will fail silently
    @meme = Meme.new params[:meme]
    if @meme.save
      redirect_to meme_path(@meme)
    else
      # render errors
    end
  end

  def new
    @meme = Meme.new
  end

  def show
    @meme = Meme.find(params[:id])
    @captions = @meme.captions.order("votes DESC")
  end

end
