# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

User.destroy_all
Answer.destroy_all
Question.destroy_all
Quiz.destroy_all

User.create!(
  name: 'Generic Boss',
  username: 'firstadmin',
  password: '123',
  admin: true
)

User.create!(
  name: 'Bob',
  username: 'firstuser',
  password: '123',
  admin: false
)

CSV.foreach('db/quizzes.csv', headers: true) do |row|
  Quiz.create!(row.to_h)
end

CSV.foreach('db/questions.csv', headers: true) do |row|
  Question.create!(row.to_h)
end

CSV.foreach('db/answers.csv', headers: true) do |row|
  Answer.create!(row.to_h)
end


ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end