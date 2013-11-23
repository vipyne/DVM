class AddVotesToCaptions < ActiveRecord::Migration
  def change
    add_column :captions, :votes, :integer
  end
end
