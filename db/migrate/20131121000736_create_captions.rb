class CreateCaptions < ActiveRecord::Migration
  def change
    create_table :captions do |t|

      t.text :title
      t.text :body
      t.text :signature
      t.belongs_to :meme
      t.timestamps
    end
  end
end
