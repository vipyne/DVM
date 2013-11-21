class MemesController < ActionController





  def show
    @meme = Meme.find(params[:id])
    @captions = @meme.captions
  end


end
