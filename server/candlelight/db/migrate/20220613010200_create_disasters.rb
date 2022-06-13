class CreateDisasters < ActiveRecord::Migration[7.0]
  def change
    create_table :disasters do |t|
      t.date :happened_on
      t.integer :death, default: 0
      t.integer :injury, default: 0
      t.string :area
      t.string :type
      t.string :url

      t.timestamps
    end
  end
end
