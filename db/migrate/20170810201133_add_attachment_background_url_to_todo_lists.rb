class AddAttachmentBackgroundUrlToTodoLists < ActiveRecord::Migration
  def self.up
    change_table :todo_lists do |t|
      t.attachment :background_url
    end
  end

  def self.down
    remove_attachment :todo_lists, :background_url
  end
end
