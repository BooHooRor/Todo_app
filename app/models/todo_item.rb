class TodoItem < ApplicationRecord
  belongs_to :todo_list

  def completed?
  	# one line version: !completed_at.blank?
  	if self.completed_at != nil
  		true
  	else
  		false
  	end
  end
end
