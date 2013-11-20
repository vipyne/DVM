class CreateMemesTable < ActiveRecord::Migration
  def change
    create_table :memes do |t|
      t.string :title
      t.string :image_url

      t.timestamps
    end
  end
end
