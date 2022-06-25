class AddImageToStories < ActiveRecord::Migration[7.0]
  def change
    add_column :stories, :image, :string
  end
end
