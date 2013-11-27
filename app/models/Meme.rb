class Meme < ActiveRecord::Base
  attr_accessible :title, :image_url
  has_many :captions
  before_save :upload_photo


  private
  def upload_photo
    cloudinary = Cloudinary::Uploader.upload(params[:meme][:image_url])
    self.image_url = cloudinary["url"]
  end
end
