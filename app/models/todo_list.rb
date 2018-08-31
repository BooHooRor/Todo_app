class TodoList < ApplicationRecord
	validates :title, presence: true, length: {in: 2..40}
	has_many :todo_items, dependent: :destroy
	has_attached_file :background_url, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  	validates_attachment_content_type :background_url, content_type: /\Aimage\/.*\z/
end
