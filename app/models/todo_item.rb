class TodoItem < ApplicationRecord
  validates :content, presence: true
  belongs_to :todo_list

  scope :complete, -> {where.not(completed_at: nil)}

  def completed?
  	# one line version: !completed_at.blank?
  	if self.completed_at != nil
  		true
  	else
  		false
  	end
  end

end
