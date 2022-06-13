class CreateStats < ActiveRecord::Migration[7.0]
  def change
    create_table :stats do |t|
      t.integer :year
      t.integer :death, default: 0
      t.integer :injury, default: 0
      t.integer :week_0, default: 0
      t.integer :week_1, default: 0
      t.integer :week_2, default: 0
      t.integer :week_3, default: 0
      t.integer :week_4, default: 0
      t.integer :week_5, default: 0
      t.integer :week_6, default: 0
      t.integer :hour_0, default: 0
      t.integer :hour_1, default: 0
      t.integer :hour_2, default: 0
      t.integer :hour_3, default: 0
      t.integer :hour_4, default: 0
      t.integer :hour_5, default: 0
      t.integer :hour_6, default: 0
      t.integer :hour_7, default: 0
      t.integer :hour_8, default: 0
      t.integer :hour_9, default: 0
      t.integer :hour_10, default: 0
      t.integer :hour_11, default: 0
      t.integer :hour_12, default: 0
      t.integer :hour_13, default: 0
      t.integer :hour_15, default: 0
      t.integer :hour_16, default: 0
      t.integer :hour_17, default: 0
      t.integer :hour_18, default: 0
      t.integer :hour_19, default: 0
      t.integer :hour_20, default: 0
      t.integer :hour_21, default: 0
      t.integer :hour_22, default: 0
      t.integer :hour_23, default: 0

      t.timestamps
    end

    add_index :stats, :year, unique: true
  end
end
