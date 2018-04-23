class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader

 def posted_time
  self.created_at.to_s(:default)
 end

end
