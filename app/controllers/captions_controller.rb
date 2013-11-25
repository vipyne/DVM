class CaptionsController <ApplicationController
  def create
    @caption = Caption.new
  end

  def new
    @caption = Caption.new
  end

  def create
    @caption = Caption.create(params[:caption])
    render :partial => "/captions/newly_added", :locals => {:caption => @caption}
  end

  def update
    @caption = Caption.find(params[:id])
    @caption.votes +=1
    @caption.save
    # if request.xhr
    #   vote_content = {votes: new_vote}
    #   content_type :json
    #   vote_content.to_json
    # else
      render :partial => "/captions/newly_added", :locals => {:caption => @caption}
    # end
  end


end
