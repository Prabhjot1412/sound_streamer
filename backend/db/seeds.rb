# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "creating users"
User.create!(username: 'admin', password: '123456', role: 'admin')
User.create!(username: 'user', password: '123456')

puts "creating profiles"
name = Faker::FunnyName.name

Profile.create!(user_id: 1, username: name)
Profile.create!(user_id: 2, username: name)

puts 'creating characters'

Profile.all.each do |pro|
  pro.characters.create!(name: Faker::FunnyName.name, avatar_name: Character::WARRIOR)
end

puts 'creating skills'
Skill.create!(name: 'Attack', power: 10.0, cost: 0.0)

puts "creating images"
Thumbnail.create!(set_name: 'base')
Thumbnail.last.images.attach(io: File.open("#{Rails.root}/app/assets/images/blank-profile-picture.png"), filename: Character::DEFAULT_AVATAR, content_type: 'image/png')
Thumbnail.last.images.attach(io: File.open("#{Rails.root}/app/assets/images/warrior.png"), filename: Character::WARRIOR, content_type: 'image/png')

puts "creating groups"
group = User.first.groups.first_or_create(name: "Wallpapers")

puts "attaching images to groups"
group.images.attach(io: File.open("#{Rails.root}/app/assets/images/meeting.png"), filename: "meeting", content_type: 'image/png')

puts "commenting on images"
image = group.images.first
ImageDetail.create!(image_id: image.id, comment: Faker::JapaneseMedia::DragonBall.race)

puts "adding music"
music = User.first.musics.create(name: Faker::JapaneseMedia::DragonBall.race)
music.song.attach(io: File.open("#{Rails.root}/app/assets/sample-1.wav"), filename: "sample-1", content_type: 'audio/mpeg')
music.thumbnail.attach(io: File.open("#{Rails.root}/app/assets/images/meeting.png"), filename: "meeting", content_type: 'image/png')