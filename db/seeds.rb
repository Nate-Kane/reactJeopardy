# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

# Thing.create(name: 'Tacos')
# Thing.create(name: 'Pizza')
# Thing.create(name: Faker::Hacker.noun)

# create_table "cards", force: :cascade do |t|
#   t.string "category"
#   t.string "question"
#   t.string "answer"
#   t.string "a1"
#   t.string "a2"
#   t.integer "points"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

card1 = Card.create(
  category:'Food',
  question:'What is my favorite food?',
  answer:'Italian food',
  a1: 'French food',
  a2: 'American food',
  points:200
)
card2 = Card.create(
  category:'Food',
  question:'What is the most popular breakfast food?',
  answer:'Bacon',
  a1: 'Pancakes',
  a2: 'Eggs',
  points:300
)

card3 = Card.create(
  category:'Sports',
  question:'Who is the best UFC fighter?',
  answer:'Conor McGregor',
  a1: 'That Russian guy',
  a2: 'Muhammed Ali',
  points:100
)
card4 = Card.create(
  category:'Sports',
  question:'Which of these people does MASSIVE front flips?',
  answer:'Dominic Di Tommaso',
  a1: 'Jason Paul',
  a2: 'Jesse LaFlair',
  points:400
)

card5 = Card.create(
  category:'Music',
  question:'What is my main instrument?',
  answer:'Guitar',
  a1: 'Piano',
  a2: 'Kazoo',
  points:400
)
card6 = Card.create(
  category:'Music',
  question:'Which of these guitar players wrote Voodoo Child?',
  answer:'Jimi Hendrix',
  a1: 'Eric Clapton',
  a2: 'Oasis',
  points:100
)

