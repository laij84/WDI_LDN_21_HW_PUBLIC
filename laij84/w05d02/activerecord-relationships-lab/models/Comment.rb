# A recipe has many comments
# A comment belongs to a recipe
# A course has many comments through recipes

class Comment < ActiveRecord::Base
  belongs_to :recipe
end