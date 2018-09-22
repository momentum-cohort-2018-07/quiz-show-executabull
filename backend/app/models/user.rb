class User < ApplicationRecord
  has_secure_token
  has_secure_password
  validates :username, uniqueness: true, length: {minimum: 6}
  validates :password, presence: true, length: {minimum: 2}
end
