class MemesController < ApplicationController

  def index
    @memes = Meme.all
  end

  def show
    @meme = Meme.find(params[:id])
    @captions = Caption.where(meme_id: params[:id])
  end

end
