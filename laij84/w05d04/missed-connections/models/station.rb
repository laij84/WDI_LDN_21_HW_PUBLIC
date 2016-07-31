class Station < ActiveRecord::Base
  has_and_belongs_to_many :posts
  has_and_belongs_to_many :lines
end