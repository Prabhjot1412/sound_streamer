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

ActiveRecord::Schema[7.0].define(version: 2024_04_18_170732) do
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

  create_table "character_skills", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "skill_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_skills_on_character_id"
    t.index ["skill_id"], name: "index_character_skills_on_skill_id"
  end

  create_table "characters", force: :cascade do |t|
    t.bigint "profile_id"
    t.string "name", null: false
    t.string "avatar_name", default: "placeholder"
    t.string "char_class"
    t.integer "level", default: 1
    t.float "hp", default: 100.0
    t.float "mp", default: 100.0
    t.float "current_hp"
    t.float "current_mp"
    t.float "attack", default: 0.0
    t.float "magic_attack", default: 0.0
    t.float "defense", default: 0.0
    t.float "magic_defense", default: 0.0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_characters_on_profile_id"
  end

  create_table "fund_calendars", force: :cascade do |t|
    t.bigint "user_id"
    t.float "total_amount"
    t.float "expected_returns"
    t.integer "time_in_years"
    t.jsonb "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fund_calendars_on_user_id"
  end

  create_table "groups", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_groups_on_user_id"
  end

  create_table "image_details", force: :cascade do |t|
    t.bigint "image_id"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["image_id"], name: "index_image_details_on_image_id"
  end

  create_table "musics", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_musics_on_user_id"
  end

  create_table "playlist_musics", force: :cascade do |t|
    t.bigint "music_id"
    t.bigint "playlist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "playlists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username"
    t.string "difficulty", default: "easy"
    t.index ["user_id"], name: "index_profiles_on_user_id"
    t.index ["username", "user_id"], name: "index_username_user_id", unique: true
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.float "power"
    t.float "cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "thumbnails", force: :cascade do |t|
    t.string "set_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "role", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "character_skills", "characters"
  add_foreign_key "character_skills", "skills"
  add_foreign_key "groups", "users"
  add_foreign_key "musics", "users"
  add_foreign_key "playlists", "users"
end
