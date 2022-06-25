# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_25_045417) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "disasters", force: :cascade do |t|
    t.date "happened_on"
    t.integer "death", default: 0
    t.integer "injury", default: 0
    t.string "area"
    t.string "type"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "category"
  end

  create_table "posts", force: :cascade do |t|
    t.text "body"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stats", force: :cascade do |t|
    t.integer "year"
    t.integer "death", default: 0
    t.integer "injury", default: 0
    t.integer "week_0", default: 0
    t.integer "week_1", default: 0
    t.integer "week_2", default: 0
    t.integer "week_3", default: 0
    t.integer "week_4", default: 0
    t.integer "week_5", default: 0
    t.integer "week_6", default: 0
    t.integer "hour_0", default: 0
    t.integer "hour_1", default: 0
    t.integer "hour_2", default: 0
    t.integer "hour_3", default: 0
    t.integer "hour_4", default: 0
    t.integer "hour_5", default: 0
    t.integer "hour_6", default: 0
    t.integer "hour_7", default: 0
    t.integer "hour_8", default: 0
    t.integer "hour_9", default: 0
    t.integer "hour_10", default: 0
    t.integer "hour_11", default: 0
    t.integer "hour_12", default: 0
    t.integer "hour_13", default: 0
    t.integer "hour_15", default: 0
    t.integer "hour_16", default: 0
    t.integer "hour_17", default: 0
    t.integer "hour_18", default: 0
    t.integer "hour_19", default: 0
    t.integer "hour_20", default: 0
    t.integer "hour_21", default: 0
    t.integer "hour_22", default: 0
    t.integer "hour_23", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["year"], name: "index_stats_on_year", unique: true
  end

  create_table "stories", force: :cascade do |t|
    t.string "title"
    t.string "body"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
