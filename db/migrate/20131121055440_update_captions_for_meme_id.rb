class UpdateCaptionsForMemeId < ActiveRecord::Migration
  def change
    add_column :captions, :meme_id, :integer
  end

end
