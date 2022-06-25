class AddCategoryToDisasters < ActiveRecord::Migration[7.0]
  def change
    add_column :disasters, :category, :string
  end
end
