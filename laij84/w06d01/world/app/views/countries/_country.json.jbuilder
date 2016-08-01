json.extract! country, :id, :name, :flag, :size, :population, :language, :currency, :continent_id, :created_at, :updated_at
json.url country_url(country, format: :json)