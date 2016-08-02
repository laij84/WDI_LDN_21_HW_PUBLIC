class Location < ApplicationRecord
  mount_uploader :graffiti_image, GraffitiImageUploader
end
