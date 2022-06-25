class Story < ApplicationRecord
  validates :url, presence: true

  before_validation do |story|
    og = Ogpr.fetch(story.url)
    story.title = og.title
    story.body = og.description
    story.image = og.image
  end
end