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

card1 = Card.create(
  category:'category1',
  question:'question1',
  answer:'answer1',
  points:101
)

card2 = Card.create(
  category:'category2',
  question:'questio2',
  answer:'answer2',
  points:102
)

card3 = Card.create(
  category:'category3',
  question:'question3',
  answer:'answer3',
  points:103
)

