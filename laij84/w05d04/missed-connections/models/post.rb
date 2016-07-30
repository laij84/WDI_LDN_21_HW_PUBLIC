class Post < ActiveRecord::Base
  has_and_belongs_to_many :stations
  belongs_to :users
end