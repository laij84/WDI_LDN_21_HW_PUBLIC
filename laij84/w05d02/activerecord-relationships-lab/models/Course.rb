class Course < ActiveRecord::Base
  has_many :recipes
  has_many :ingredients, -> {distinct}, through: :recipes
  has_many :comments, -> {distinct}, through: :recipes
end