class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :username, length: {in: 3...20}
  validates :first_name, presence: true
  validates :last_name, presence: true  

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :rememberable, :trackable, :validatable


         
  has_many :posts
end
