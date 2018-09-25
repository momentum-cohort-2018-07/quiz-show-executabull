class User < ApplicationRecord
  has_secure_token
  has_secure_password
  has_many :scores
  validates :name, presence: true
  validates :username, uniqueness: true, length: {minimum: 4}
  validates :password, presence: true, length: {minimum: 2}
end
